package model.dao;

import java.util.ArrayList;

import model.dto.BoardDto;

public class BoardDao extends Dao {
	private static BoardDao bdao = new BoardDao();
	public static BoardDao getInstance() { return bdao; } 
	//1. 글등록 메소드 김장군
	public boolean write(String b_title,String b_content,String b_file ,int m_no) {
		String sql ="insert into board values(0,?,?,?,null,?)";
		try {
			ps=con.prepareStatement(sql);
			ps.setString(1, b_title);
			ps.setString(2, b_content);
			ps.setString(3, b_file);
			ps.setInt(4, m_no);
			ps.executeUpdate();
			return true;
		} catch (Exception e) {
			System.out.println(e);
		}return false;		
	}
	public ArrayList<BoardDto> getBoardList(){//글 목록호출 메소드 김장군
		ArrayList<BoardDto> list = new ArrayList<>();
		
		String sql ="SELECT b_no,b_title,b_date,m_id from board b ,member m where b.mno = m.mno;";
		try {
			ps=con.prepareStatement(sql);
			rs=ps.executeQuery();
			while(rs.next()) {
				BoardDto dto = new BoardDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4));
				list.add(dto);	
			}
			return list;
		} catch (Exception e) {
			System.out.println(e);
		}
		return list;
	}
	
	
	
}
