package controller.board;

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
			ArrayList<BoardDto> list =  BoardDao.getInstance().getBoardList();
			JSONArray array = new JSONArray();
			for(int i=0;i<list.size();i++) {
				JSONObject object = new JSONObject();
				object.put("bno", list.get(i).getB_no() );
				object.put("btitle", list.get(i).getB_title() );
				object.put("bdate", list.get(i).getB_date() );
				object.put("mid", list.get(i).getM_id() );
				array.add(object);
				
			}
			
			response.getWriter().print(array);
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
			response.getWriter().print(object);
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
			System.out.println( b_title ); 
		String b_content = multi.getParameter("b_content");
			System.out.println( b_content );	
		
	    String b_file = multi.getFilesystemName("b_file"); 
			System.out.println( b_file );
		int m_no  = Integer.parseInt((String)request.getSession().getAttribute("m_no"));
			
		boolean result = BoardDao.getInstance().write(b_title, b_content, b_file ,m_no);
		response.getWriter().print(result);

	}	

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
