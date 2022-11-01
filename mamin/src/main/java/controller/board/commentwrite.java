package controller.board;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;

import model.dao.BoardDao;

/**
 * Servlet implementation class commentwrite
 */
@WebServlet("/board/commentwrite")
public class commentwrite extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public commentwrite() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
   //댓글 출력 김장군
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 요청
		String type = request.getParameter("type");
		int b_no = (Integer)request.getSession().getAttribute("b_no");
		JSONArray array = new JSONArray();
		
		// 2. dao처리 
		if( type.equals("comment") ) {	// 댓글 
			array = BoardDao.getInstance().getclist( b_no ); 		
		}else if(type.equals("recomment")) { // 대댓글
			int c_index = Integer.parseInt(request.getParameter("c_no"));// 상위댓글의 번호 호출
			
			array = BoardDao.getInstance().getrclist( b_no , c_index ); 		
		}
		// 3. 결과
		response.setCharacterEncoding("UTF-8"); 		
		response.getWriter().print( array );
	
	}
	
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	
	 //댓글 작성 김장군
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		if(request.getSession().getAttribute("m_id")==null) { 
			response.getWriter().print(false);return;
		}
		if(request.getParameter("type").equals("1")) {
			int m_no= (Integer) request.getSession().getAttribute("m_no");
			int b_no= (Integer) request.getSession().getAttribute("b_no");
			String c_content = request.getParameter("c_content");
			
			 boolean result = BoardDao.getInstance().cwrite(m_no,b_no,c_content );
			 response.getWriter().print(result);
		
		}else if(request.getParameter("type").equals("2")) {
			int m_no= (Integer) request.getSession().getAttribute("m_no");
			String c_content = request.getParameter("c_content");
			int b_no= (Integer) request.getSession().getAttribute("b_no");
			int c_index = Integer.parseInt( request.getParameter("c_no") );	
			boolean result = BoardDao.getInstance().rcwrite( c_content , m_no , b_no , c_index );
			 response.getWriter().print(result);
			
		}
		
	
	}

}
