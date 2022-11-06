package model.dao;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import model.dto.MemberDto;

public class RoomDao extends Dao {
	static RoomDao dao = new RoomDao();

	public static RoomDao getInstance() {
		return dao;
	}


	// [지웅] 20221030 유저 방 입장시 데이터 출력 -> Room 입장 후 게임 방정보에 표시용
	// player 한명 -> player[room에 있는 id]전체
	// 지웅 20221031 room 접속자 db -> 엔드포인트의 vector로 변경
	public MemberDto getPlayerInfo(String m_id) {
		MemberDto dto = new MemberDto();
		String sql = "select * from member where m_id = ?";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, m_id);
			rs = ps.executeQuery();
			if (rs.next()) {
				dto.setM_no(rs.getInt(1));
				dto.setM_id(rs.getString(2));
				dto.setM_email(rs.getString(4));
				dto.setM_nick(rs.getString(6));
				dto.setM_img(rs.getString(7));
				dto.setWins(rs.getInt(9));
				dto.setTotal(rs.getInt(10));
			}
			return dto;
		} catch (Exception e) {
			System.out.println("게임 입장 유저 정보DB 오류" + e);
		}
		return null;
	}

	
	public void invalidgameover(String m_nickout, JSONArray arr){
		
		arr.forEach((player)->{
		    JSONObject json = (JSONObject) player;
		    if(json.get("m_nick").equals(m_nickout)){//게임중 나간 플레이어일경우 total만 +1
		    	String sql = "update member set total = total+1 where m_nick=?";
		    	
		    	try {
					ps=con.prepareStatement(sql);
					ps.setString(1, m_nickout);
					ps.executeUpdate();
				} catch (Exception e) {
					System.out.println(e);
				}
		    	
		    }else {///나간플레이어가 아닌경우 wins 와 total 필드 +1
		    	String sql = "update member set total = total+1 ,wins=wins+1 where m_nick=?";
		    	try {
		    		ps=con.prepareStatement(sql);
		    		ps.setString(1, (String) json.get("m_nick"));
					ps.executeUpdate();
				} catch (Exception e) {
					System.out.println(e);
				}
		    }
		

		});
		
	}
	
	
	
	
	
	
	
	
	
}
