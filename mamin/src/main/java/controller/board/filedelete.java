package controller.board;

import java.io.File;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.dao.BoardDao;
import model.dto.BoardDto;

/**
 * Servlet implementation class filedelete
 */
@WebServlet("/board/filedelete")
public class filedelete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public filedelete() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    /////글 수정시 파일 삭제 김장군
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 삭제할 게시물번호 = 현재 보고 있는 게시물번호  = 세션 ( Object -> 형변환 )
				int b_no = (Integer)request.getSession().getAttribute("b_no");
				// 삭제할 게시물 정보 호출
				BoardDto dto = BoardDao.getInstance().getBoard(b_no);
				// 2. DAO 처리 [ 업데이트 ]
				boolean result = BoardDao.getInstance().filedelete( b_no );
				// 3. 실제 파일 삭제 처리
				if( result ) {
					String deletepath = request.getSession().getServletContext()
							.getRealPath("/upload/"+dto.getB_file() );
					File file = new File(deletepath);
					if( file.exists() ) file.delete();
				}
				// 4. 결과 반환
				response.getWriter().print(result);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
