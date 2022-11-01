package model.dao;

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

}
