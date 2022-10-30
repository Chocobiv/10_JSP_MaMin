package model.dao;

import model.dto.MemberDto;

public class MemberDao extends Dao {

	// singleton - 메모리 하나만 쓰기 위해서 [공유 메모리]
	private static MemberDao mdao = new MemberDao();

	public static MemberDao getInstance() {
		return mdao;
	}

	// 비아 - 1. 회원가입 메소드
	public boolean signup(MemberDto dto) {
		String sql = "insert into member (m_id,m_password,m_email,m_nick,m_img,m_profile) values(?,?,?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getM_id());
			ps.setString(2, dto.getM_password());
			ps.setString(3, dto.getM_email());
			ps.setString(4, dto.getM_nick());
			ps.setString(5, dto.getM_img());
			ps.setString(6, dto.getM_profile());
			ps.executeUpdate();
			return true;
		} catch (Exception e) {
			System.out.println(e);
		}
		return false;
	}

	// 비아 - 2. 아이디 중복체크
	public boolean idcheck(String m_id) {
		String sql = "select * from member where m_id=?";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, m_id);
			rs = ps.executeQuery();
			if (rs.next())
				return true;
		} catch (Exception e) {
			System.out.println("DB오류) " + e);
		}
		return false;
	}

	// 비아 - 3. 이메일 중복체크
	public boolean emailcheck(String m_email) {
		String sql = "select * from member where m_email=?";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, m_email);
			rs = ps.executeQuery();
			if (rs.next())
				return true;
		} catch (Exception e) {
			System.out.println("DB오류) " + e);
		}
		return false;
	}

	// 비아 - 4. 로그인
	public int login(String m_id, String m_password) {
		String sql = "select * from member where m_id=?";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, m_id);
			rs=ps.executeQuery();
			if(rs.next()) {
				sql = "select * from member where m_id=? and m_password=?";
				ps = con.prepareStatement(sql);
				ps.setString(1, rs.getString(2));	//첫번째 select로 찾은 데이터를 대입
				ps.setString(2, m_password);
				rs=ps.executeQuery();
				if(rs.next()) return 1;		//로그인 성공
				return 2;					//패스워드가 틀렸다는 뜻
			}
		} catch (Exception e) {System.out.println(e); }	//DB 오류
		return 0;		//아이디가 없다는 뜻
	}
	

	// 비아 - 회원아이디 -> 회원번호
	public int getNo(String m_id) {
		String sql = "select m_no from member where m_id = ?";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, m_id);
			rs = ps.executeQuery();
			if(rs.next()) { return rs.getInt(1); }
		}catch (Exception e) { System.out.println("DB오류) "+e); }
		return 0;
	}
}
