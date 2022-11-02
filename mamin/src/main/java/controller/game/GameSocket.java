package controller.game;

import java.io.IOException;

import java.util.Vector;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import model.dto.MemberDto;

@ServerEndpoint("/game/GameSocket")
public class GameSocket {
	
	// 접속 끊김(세션 변경) 체크 및 session값을 통한 데이터 전송용 Map 자료형
		// 세션값이 바뀌므로 아이디별로 새로 세팅
	Vector<Session> clients = new Vector<>();
	
	// 지웅 20221102 16:21 roomsocket의 players 벡터 가져오기 
	static Vector<MemberDto> players = new Vector<>();
	
	void setPlayers(Vector<MemberDto> players) {
		this.players = players;
	}
	
	@OnOpen
	public void OnOpen( Session session) throws IOException  {
		clients.add(session);
		System.out.println(clients.indexOf(session)+1 +"번 플레이어가 입장 했습니다.");
	}
	@OnClose
	public void OnClose( Session session ) throws IOException {
		System.out.println( clients.indexOf(session)+1 +"번 플레이어 접속 끊김");		
	}
	@OnMessage
	public void OnMessage( Session session, String object ) throws IOException{
		for(Session s : clients) {
			s.getBasicRemote().sendText(object);
		}
	}
}
