package model.dao;

import java.util.ArrayList;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import model.dto.BoardDto;

public class BoardDao extends Dao {
	private static BoardDao bdao = new BoardDao();
	public static BoardDao getInstance() { return bdao; } 
	//1. 글등록 메소드 김장군
	public boolean write(String b_title,String b_content,String b_file ,int m_no) {
		String sql ="insert into board(b_title,b_content,b_file,m_no) values(?,?,?,?)";
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
	//2.글 목록호출 메소드 김장군
	// 2. 글출력
		public ArrayList< BoardDto > getlist( int startrow , int listsize , String key , String keyword ) {
			ArrayList< BoardDto > list = new ArrayList<>();
			String sql = "";
			if( !key.equals("") && !keyword.equals("") ) { // 검색이 있을경우 
				sql = "select b.b_no, b.b_title, b.b_date , m.m_id "
						+ "from member m , board b "
						+ "where m.m_no = b.m_no and "+key+" like '%"+keyword+"%' "
						+ "order by b.b_date desc "
						+ "limit "+startrow+" , "+listsize;
			}else { // 검색이 없을경우
				sql = "select b.b_no, b.b_title, b.b_date , m.m_id from member m , board b "
						+ "where m.m_no = b.m_no "
						+ "order by b.b_date desc limit "+startrow+" , "+listsize;
			}
			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				// if[한개] -> dto vs while[여러개] -> list
				while( rs.next() ) {
					BoardDto dto = new BoardDto(
							rs.getInt(1), rs.getString(2),
							rs.getString(3), rs.getString(4)
							
							
							);
					list.add(dto); // 리스트에 담기
				}
				return list;
			}
			catch (Exception e) {System.out.println(e);} return list;
		}
	// 3.개별 글 출력 김장군
	public BoardDto getBoard(int b_no) {
		String sql = "select b_no, b_title, b_content, m_id, b_file from board b , member m where   b.m_no=m.m_no and b.b_no="+b_no;
		try {
			ps=con.prepareStatement(sql);
			rs=ps.executeQuery();
			
			if(rs.next()) {
				BoardDto dto = new BoardDto();
				dto.setB_no(b_no);
				dto.setB_title(rs.getString(2));
				dto.setB_content(rs.getString(3));
				dto.setM_id(rs.getString(4));
				dto.setB_file(rs.getString(5));
				return dto;
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		
		
		return null;
		
	}
	
	//4.글 삭제 김장군
	public boolean boardDelete(int b_no) {
		String sql = "delete from board where b_no="+b_no;
		try {
			ps=con.prepareStatement(sql);
			ps.executeUpdate();
			return true;
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return false;
		
	}
	
	// 5. 첨부파일만 삭제[업데이트] 김장군
		public boolean filedelete( int b_no ) {
			String sql = "update board set b_file = null where b_no = "+b_no;
			try {
				ps = con.prepareStatement(sql);
				ps.executeUpdate(); return true;
			}catch (Exception e) { System.out.println(e);	} return false;
			
		}
		//6.글 수정 메소드 김장군
		public boolean update( int b_no , String b_title , 
				String b_content , String b_file ) {
			
			String sql = "update board set b_title = ? , "
					+ " b_content=? , b_file = ? "
					+ " where b_no = ?";
			try {
				ps = con.prepareStatement(sql);
				ps.setString( 1 , b_title );
				ps.setString( 2 , b_content );
				ps.setString( 3 , b_file );
				ps.setInt( 4 , b_no );
				ps.executeUpdate(); return true;
			}catch (Exception e) {System.out.println(e);} return false;
		}
	//7.전체 게시물수 김장군
	public int gettotalsize( String key , String keyword ) {
		String sql = "";
		if( !key.equals("") && !keyword.equals("") ) { // 검색이 있을경우
				sql = "select count(*) from member m , board b where m.m_no = b.m_no and "+key+" like '%"+keyword+"%'";
		}else { // 검색이 없을경우 
			 sql = "select count(*) from member m , board b where m.m_no = b.m_no";
		}
			
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery(); 
			if( rs.next() ) return rs.getInt(1);
		}catch (Exception e) {System.out.println(e);} return 0;
	}
	
	//8.댓글 작성 김장군
	public boolean cwrite( int  m_no,int b_no,String c_content) {
		String sql ="insert into comment (m_no,b_no,c_content,c_index) values(?,?,?,0)";
		try {
			ps=con.prepareStatement(sql);
			ps.setInt(1, m_no);
			ps.setInt(2, b_no);
			ps.setString(3, c_content);
			ps.executeUpdate();
			return true;
			
		} catch (Exception e) {System.out.println(e);}
		
		
		
		
		return false;
	}
	
	
	//9.대댓글 작성 김장군	
	public boolean rcwrite(String c_content , int m_no , int b_no , int c_index) {
		String sql = "insert into comment( c_content , m_no , b_no , c_index ) values( ? , ? , ? , ? )";
		try {
			ps = con.prepareStatement(sql);
			ps.setString( 1 , c_content ); 	ps.setInt( 2 , m_no ); 
			ps.setInt( 3 , b_no );			ps.setInt( 4 , c_index );
			ps.executeUpdate(); return true;
		}catch (Exception e) {System.out.println(e);} return false;
		
		
		
	}
	
	
	
	
	//10 댓글 호출 김장군
	
	public JSONArray getclist( int b_no ) {
		JSONArray array = new JSONArray();
		String sql = "select c.c_content , c.c_date , m.m_id , c.c_no"
				+ " from comment c, member m "
				+ " where c.m_no = m.m_no and c.b_no = "+b_no+" and c.c_index = 0 "
				+ " order by c.c_date desc";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while( rs.next() ) {
				JSONObject object = new JSONObject();
				object.put( "rcontent", rs.getString(1) );
				object.put( "rdate", rs.getString(2) );
				object.put( "mid", rs.getString(3) );
				object.put( "rno", rs.getInt(4) );
				array.add(object);
			}
		}catch (Exception e) {} return array;
	}
	
	// 10-2. 대댓글 호출
		public JSONArray getrclist( int b_no , int c_index ) {
			JSONArray array = new JSONArray();
			String sql = "select c.c_content , c.c_date , m.m_id , c.c_no"
					+ " from comment c , member m "
					+ " where c.m_no = m.m_no and c.b_no = "+b_no+" and c.c_index = "+c_index
					+ " order by c.c_date desc";
			try {
				ps = con.prepareStatement(sql);
				rs = ps.executeQuery();
				while( rs.next() ) {
					JSONObject object = new JSONObject();
					object.put( "c_content", rs.getString(1) );
					object.put( "c_date", rs.getString(2) );
					object.put( "m_id", rs.getString(3) );
					object.put( "c_no", rs.getInt(4) );
					array.add(object);
				}
			}catch (Exception e) {} return array;
		}
	
	
	
	
	
	
	
}
