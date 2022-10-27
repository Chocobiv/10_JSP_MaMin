package controller.board;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import model.dao.BoardDao;


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

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	//글 등록 POST 김장군
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uploadpath = request.getSession().getServletContext().getRealPath("/upload");
		System.out.println(uploadpath);
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
