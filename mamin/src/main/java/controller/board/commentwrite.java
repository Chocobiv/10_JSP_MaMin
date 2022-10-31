package controller.board;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
    //댓글 작성 김장군
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		if(request.getSession().getAttribute("m_id")==null) { 
			response.getWriter().print(false);
		}
		if(request.getParameter("type").equals("1")) {
			int m_no= (Integer) request.getSession().getAttribute("m_no");
			
			int b_no= (Integer) request.getSession().getAttribute("b_no");
			
			String c_content = request.getParameter("c_content");
			
			 boolean result = BoardDao.getInstance().cwrite(m_no,b_no,c_content );
			 response.getWriter().print(result);
		
		}
		
	
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
