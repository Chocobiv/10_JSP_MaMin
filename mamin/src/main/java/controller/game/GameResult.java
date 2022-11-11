package controller.game;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import model.dao.RoomDao;

/**
 * Servlet implementation class GameResult
 */
@WebServlet("/game/GameResult")
public class GameResult extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GameResult() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println( Integer.parseInt( request.getParameter("m_no")));
		int m_no = Integer.parseInt(String.valueOf(request.getSession().getAttribute("m_no")) );
		if( m_no == Integer.parseInt( request.getParameter("m_no") ) ) {
			response.getWriter().print(true);
		}else {response.getWriter().print(false);}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String rankingarray = request.getParameter("rankingarray");
		System.out.println(rankingarray);
		JSONParser parser = new JSONParser();
		JSONArray arr;
		try {
			arr = (JSONArray) parser.parse(rankingarray);
			RoomDao.getInstance().gameresult(arr);
			
		} catch (ParseException e) {
			
			e.printStackTrace();
		}
		
		
		
		
	}

}
