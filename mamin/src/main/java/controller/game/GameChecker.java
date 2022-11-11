package controller.game;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GameChecker
 */
@WebServlet("/game/GameChecker")
public class GameChecker extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	static boolean statusGame = false;
    
    public GameChecker() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    // get = index.jsp에서 start game 클릭 시
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().print(statusGame);
	}
	
	// post = 게임 시작 시 상태 변수 전환
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		GameChecker.statusGame = true;
	}

}
