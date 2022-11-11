package controller.game;

import java.io.IOException;
import java.util.Hashtable;
import java.util.Map;
import java.util.Vector;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import model.dao.MemberDao;
import model.dao.RoomDao;
import model.dto.MemberDto;


@ServerEndpoint("/room/RoomSocket/{m_id}")
public class RoomSocket {
	
	// 지웅 20221030 방[서버]에 접속한 회원들의 정보 저장용 Hashtable
	public static Map<Session, String> clients = new Hashtable<>();
	
	// DB에 있는 room table을 여기서 vector로 바로 끝낼 수 있지 않을까?
		// 대기방->게임화면으로 넘어가면 기존 session값이 유지되지 않을 가능성이 높으니 vector로 분리해준다.
	static Vector<MemberDto> players =  new Vector<>();
	// 지웅 20221031 23:50 추가
		// 유저 수 4명 이상일 시 room->index.jsp로 내보내기
	public void UserOverflow(Session session) throws IOException {
		JSONObject obj = new JSONObject();
		obj.put("function_name", "exit");
		session.getBasicRemote().sendText(obj.toString());
	}
	
	public void UserOverflow(Session session, String m_id) throws IOException {
		JSONObject obj = new JSONObject();
		obj.put("function_name", "duplicated");
		session.getBasicRemote().sendText(obj.toString());
	}
	
	// 지웅 20221030 OnOpen 실행 시 입장한 회원의 정보 불러와서 js로 전송
		// 지웅 20221031 유저 1명 정보 -> 전체로 변경
			// 지웅 20221031 db 테이블 일부 정보 -> vector로 변경
	public void getPlayerInfo(String m_id) throws IOException{
			
		MemberDto dto = RoomDao.getInstance().getPlayerInfo(m_id);
		players.add(dto);
		JSONArray array = new JSONArray();
		for(int i = 0 ; i<players.size() ; i++) {
			JSONObject object = new JSONObject();
			object.put("s_no", i+1);
			object.put("m_no", players.get(i).getM_no());
			object.put("m_id", players.get(i).getM_id());
			object.put("m_nick", players.get(i).getM_nick());
			object.put("m_img", players.get(i).getM_img());
			object.put("wins", players.get(i).getWins());
			object.put("total", players.get(i).getTotal());
			object.put("ready", players.get(i).isReady());
			array.add(object);
		}
		JSONObject obj = new JSONObject();
		obj.put("data", array);
		obj.put("function_name", "addplayer");	
		
		for(Session s : clients.keySet()) {
			s.getBasicRemote().sendText(obj.toString());
		}
	}
	
	
	// 지웅 20221031 23:21 onclose 작동 시 vector 정보 js로 전송. getPlayerInfo(String m_id) 오버로딩
	public void getPlayerInfo() throws IOException {
		JSONArray array = new JSONArray();
		for(int i = 0 ; i<players.size() ; i++) {
			JSONObject object = new JSONObject();
			object.put("s_no", i+1);
			object.put("m_no", players.get(i).getM_no());
			object.put("m_id", players.get(i).getM_id());
			object.put("m_nick", players.get(i).getM_nick());
			object.put("m_img", players.get(i).getM_img());
			object.put("wins", players.get(i).getWins());
			object.put("total", players.get(i).getTotal());
			object.put("ready", players.get(i).isReady());
			array.add(object);
		}
		JSONObject obj = new JSONObject();
		obj.put("data", array);
		obj.put("function_name", "addplayer");
		
		for(Session s : clients.keySet()) {
			s.getBasicRemote().sendText(obj.toString());
		}
	}
	
	// 지웅 20221103 유저 ready vector에 저장
	public void setready(String object) {
		char cslotno = object.split("\"roomdata\":\"ready")[1].charAt(0);
		int slotno = Character.getNumericValue(cslotno);
		
		players.get(slotno-1).setReady();
	}
	
	// 지웅 20221030 유저 입장
	@OnOpen
	public void OnOpen( Session session, @PathParam("m_id") String m_id ) throws IOException  {
		MemberDto dto = MemberDao.getInstance().getMember(m_id);//11/03 장군 클라이언트 소켓 들어왔을때 채팅창 알림 전송용
		JSONObject object = new JSONObject();
		object.put("m_nick", dto.getM_nick());
		object.put("type","open" );
		if(clients.containsValue(m_id)) {
			UserOverflow(session, m_id);
		}		
		if(clients.size()>=4) {
			UserOverflow(session);
		}
		clients.put(session, m_id);
		for(Session s: clients.keySet()) {
			s.getBasicRemote().sendText(object.toString());
		}
		getPlayerInfo(m_id);
	}
	// 지웅 20221030 유저 퇴장
	@OnClose
	public void OnClose( Session session ) throws IOException {
		MemberDto dto = MemberDao.getInstance().getMember(clients.get(session));//11/03 장군 클라이언트 소켓 나갔을때 채팅창 알림 전송용
		JSONObject object = new JSONObject();
		object.put("m_nick", dto.getM_nick());
		object.put("type","close" );
		
		
		for(int i = 0; i<players.size(); i++) {
			if(players.get(i).getM_id().equals(clients.get(session))) {
				players.remove(i);
				break;
			}
		}
		clients.remove(session);
		for(Session s: clients.keySet()) {
			s.getBasicRemote().sendText(object.toString());
		}
		getPlayerInfo();
	}
	
	// 지웅 20221030 js에서 send()함수로 서버 접근 시 서버 접속 중인 인원들에게 줄 정보를 js의 OnMessage로 전송
	@OnMessage
	public void OnMessage( Session session, String object ) throws IOException{
		if(object.equals("\"getPlayersInfo\"")) {
			getPlayerInfo();
			return;
		}else if(object.contains("\"roomdata\":\"ready")) {	// parser 배우기 전 작성 -> 스트링에 특정 데이터 포함된 경우
			setready(object);
		}		
		synchronized (session) {
			for(Session s : clients.keySet()) {
				s.getBasicRemote().sendText(object);	// 문자열 받아서 모두에게 전송
			}			
		} 
	}
}