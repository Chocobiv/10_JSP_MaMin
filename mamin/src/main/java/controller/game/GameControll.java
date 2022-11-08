package controller.game;

import java.io.IOException;
import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import model.dao.MemberDao;
import model.dao.RoomDao;

/**
 * Servlet implementation class GameControll
 */
@WebServlet("/game/GameControll")
public class GameControll extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GameControll() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    //11/06 장군 플레이어 게임중 나갔을때 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String type = request.getParameter("type");
		if(type.equals("invalidGameover")) {
			String m_nickout= (request.getParameter("m_nickOut"));//나간 플레이어 닉네임
			String playerarray = request.getParameter("playerArray");//게임에 참가했던 플레이어정보 
			JSONParser parser = new JSONParser();
			JSONArray arr;
			try {
				arr = (JSONArray) parser.parse(playerarray);//플레이어정보 JSONArray로 형변환 한 후에 JSONArray에 대입
				 RoomDao.getInstance().invalidgameover(m_nickout,arr);
			} catch (ParseException e) {
				
				e.printStackTrace();
			}
		}else if(type.equals("bankrupt")){//1108 장군 플레이어 파산했을때
			int bankruptM_no = Integer.parseInt( request.getParameter("bankruptM_no"));
			int m_no = Integer.parseInt(String.valueOf(request.getSession().getAttribute("m_no")) );
			boolean result;
			if(bankruptM_no==m_no) {// 파산한 플레이어 m_no랑 현재 m_no랑 같으면 true반환
				result = true;
			}else {result = false;}//아니면 false반환
			response.getWriter().print(result);
			
		
		}
		
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
