package model.dao;

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
}
