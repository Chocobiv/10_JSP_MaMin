package controller.board;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import model.dao.BoardDao;
import model.dto.BoardDto;


/**
 * Servlet implementation class boardCRUD
 */
@WebServlet("/board/boardCRUD")
public class boardCRUD extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public boardCRUD() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    
    
    //글 출력  GET 김장군
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8");
		String type= request.getParameter("type");
			////////////전체 글출력//////////////////////////////////
		if( type.equals("1") ) {
			String key		= request.getParameter("key");			
			String keyword	= request.getParameter("keyword");		
			
			// 1. 페이지당 게시물수 
			int listsize = Integer.parseInt(request.getParameter("listsize"));
			// 2. 전체 게시물수 vs 검색된 게시물 수 
			int totalsize = BoardDao.getInstance().gettotalsize( key , keyword);
			// 3. *전체 페이지수 계산
			int totalpage = 0;
			if( totalsize % listsize == 0 ) totalpage = totalsize / listsize;	// 나머지가 없으면
			else totalpage = totalsize / listsize + 1;	// 나머지가 존재하면 나머지를 표시할 페이지+1
			// 3. 현재 페이지 번호  
			int page = Integer.parseInt( request.getParameter("page" )  );
			// 3. 페이지별 시작 게시물 행번호 
			int startrow = (page-1)*listsize;
			
			
			
			// 3. 화면에 표시할 최대 버튼수 
			int btnsize = 5;	// 버튼 5개씩 표시 [ 몫 : 현재페이지가 최대버튼수 커지면 ]
			int startbtn =  ( (page-1) / btnsize ) * btnsize  + 1 ;	 // 버튼 시작번호 
			int endbtn = startbtn + (btnsize-1); 	// 버튼 끝번호 
				// 만약에 endbtn 마지막 페이지보다 크면 마지막버튼 번호는 마지막페이지 번호 
				if( endbtn > totalpage ) endbtn = totalpage;
			
				JSONObject boards = new JSONObject();
				// 2. 전체 게시물 호출 vs 검색된 게시물 호출 
				ArrayList<BoardDto> list =  BoardDao.getInstance().getlist( startrow , listsize , key , keyword);
					// ** arraylist ---> jsonarray 변환[ js에서 쓸려고 ]
					JSONArray array = new JSONArray();
					for( int i = 0  ; i<list.size() ; i++ ) {
						JSONObject object = new JSONObject();
						object.put("b_no", list.get(i).getB_no() );
						object.put("b_title", list.get(i).getB_title() );
						object.put("b_date", list.get(i).getB_date() );
						object.put("m_id", list.get(i).getM_id() );
						array.add(object);
					}		
				// 4. 
				boards.put("totalpage", totalpage );	// 1. 전체 페이지수 
				boards.put("data", array);				// 2. 게시물 리스트 
				boards.put("startbtn", startbtn   );	// 3. 버튼의 시작번호 
				boards.put("endbtn", endbtn   );		// 4. 버튼의 끝번호 
				boards.put("totalsize", totalsize   );	// 5. 전체 게시물 수 
				
				// 3. 응답o
				response.setCharacterEncoding("UTF-8"); 
				response.getWriter().print( boards );
				
				//////////////////////////////개별 글 출력///////////////////////
		}else if( type.equals("2") ){
			int b_no = (Integer)request.getSession().getAttribute("b_no");///세션에서 글번호 호출
		
			BoardDto dto = BoardDao.getInstance().getBoard(b_no);
			JSONObject object = new JSONObject();
			object.put("b_no", dto.getB_no());
			object.put("b_title", dto.getB_title());
			object.put("b_content", dto.getB_content());
			object.put("m_id", dto.getM_id());
			object.put("b_file", dto.getB_file());
			if( request.getSession().getAttribute("m_id")!=null && dto.getM_id().equals( request.getSession().getAttribute("m_id"))) {//세션 아이디랑 글작성 아이디랑 일치하면
				object.put("btnaction", true);
			}
			
			response.getWriter().print(object);
		}else if(  type.equals("3")) {
			
			response.getWriter().print(request.getSession().getAttribute("m_no")); 
		}
	}

	//글 등록 POST 김장군
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uploadpath = request.getSession().getServletContext().getRealPath("/upload"); ////업로드 파일 저장 경로
	
		MultipartRequest multi = new MultipartRequest(
				request ,  						
				uploadpath , 					
				1024 * 1024 * 10, 				
				"UTF-8" , 					
				new DefaultFileRenamePolicy() 
				); 
		String b_title = multi.getParameter("b_title");	
			 
		String b_content = multi.getParameter("b_content");
			
		
	    String b_file = multi.getFilesystemName("b_file"); 
			
		int m_no  = (Integer)request.getSession().getAttribute("m_no");
		
		
			
		boolean result = BoardDao.getInstance().write(b_title, b_content, b_file ,m_no);
		response.getWriter().print(result);

	}	

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	//글 수정 김장군
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uploadpath = request.getSession().getServletContext().getRealPath("/upload"); ////업로드 파일 저장 경로
		
		MultipartRequest multi = new MultipartRequest(
				request ,  						
				uploadpath , 					
				1024 * 1024 * 10, 				
				"UTF-8" , 					
				new DefaultFileRenamePolicy() 
				); 
		String b_title = multi.getParameter("b_title");		 
		String b_content = multi.getParameter("b_content");	
	    String b_file = multi.getFilesystemName("b_file"); 	
	    int b_no  = (Integer)request.getSession().getAttribute("b_no");	
		boolean result = BoardDao.getInstance().update(b_no ,b_title, b_content, b_file);
		response.getWriter().print(result);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	//글 삭제 메소드 김장군
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int b_no = Integer.parseInt(request.getParameter("b_no"));
		BoardDto dto = BoardDao.getInstance().getBoard(b_no);
		boolean result = BoardDao.getInstance().boardDelete(b_no);///DB삭제
		if( result ) { //파일 삭제
			String deletepath = request.getSession().getServletContext().getRealPath("/upload/"+ dto.getB_file() );
			File file = new File( deletepath );
			if( file.exists() ) file.delete();	// 해당 경로에 존재하는 파일을 삭제
			// File 클래스 
				// 자바 외부에 존재 하는 파일 조작/제어 메소드 제공하는 클래스
				// 1. 객체명.length() : 해당 파일의 바이트 길이
				// 2. 객체명.delete() : 해당 파일의 삭제
				// 3. 객체명.exists()	 : 해당 파일이 존재하면 true / false 
		}
		response.getWriter().print(result);
	}

}
