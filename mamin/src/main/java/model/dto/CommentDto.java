package model.dto;

public class CommentDto {
	private int c_no ; 			//댓글 번호
	private String c_content; 	// 댓글 내용
	private String c_date ;  	// 작성 시간
	private int c_index;		// 대댓글 구분용
	private int b_no; 			// 게시물 번호
	private int m_no ;			//작성 회원 번호
	
	//풀생성자
	public CommentDto(int c_no, String c_content, String c_date, int c_index, int b_no, int m_no) {
		super();
		this.c_no = c_no;
		this.c_content = c_content;
		this.c_date = c_date;
		this.c_index = c_index;
		this.b_no = b_no;
		this.m_no = m_no;
	}
	//빈생성자
	public CommentDto() {
		super();
	}
	//댓글 작성용 생성자
	public CommentDto(String c_content, int c_index, int b_no, int m_no) {
		super();
		this.c_content = c_content;
		this.c_index = c_index;
		this.b_no = b_no;
		this.m_no = m_no;
	}
	public int getC_no() {
		return c_no;
	}
	public void setC_no(int c_no) {
		this.c_no = c_no;
	}
	public String getC_content() {
		return c_content;
	}
	public void setC_content(String c_content) {
		this.c_content = c_content;
	}
	public String getC_date() {
		return c_date;
	}
	public void setC_date(String c_date) {
		this.c_date = c_date;
	}
	public int getC_index() {
		return c_index;
	}
	public void setC_index(int c_index) {
		this.c_index = c_index;
	}
	public int getB_no() {
		return b_no;
	}
	public void setB_no(int b_no) {
		this.b_no = b_no;
	}
	public int getM_no() {
		return m_no;
	}
	public void setM_no(int m_no) {
		this.m_no = m_no;
	}
	
	
	
	
	
}
