<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/mamin/css/gameBoard.css">
<link rel="stylesheet"
   href="https://unpkg.com/destyle.css@1.0.5/destyle.css">
<link
   href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
   rel="stylesheet"
   integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<!-- 헤더 연결없어서 폰트어썸 , 부트스트랩 따로 추가해줌 - 수현 -->
<link rel="stylesheet"
   href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
</head>
<body>


   <!-- Button trigger modal -->

   <button style="display:none;" type="button" class="modalinfoBtn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
   </button>
   <!-- Modal -->

   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered">
       <div class="modal-content modalbox">
         <div class="modal-header ingame_userInfo">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Information</h1>
           <button type="button" class="btn-close m_btn_close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>         
         <div class="modal_contentsbody">
         </div>
       </div>
     </div>
   </div>
	

   <div class="gameroom">
      <!-- 게임방 전체 -->
      <div class="gameboard">
      <div id="toastwage1"></div>
      <div id="toastwage2"></div>
      <div id="toastwage3"></div>
      <div id="toastwage4"></div>
         <!-- 게임판 -->
         <div class="g_profile">
            <!-- 플레이어 정보 -->
            <div class="player1_info" onclick="click_ModalBtn(1,0)"></div>
            <div class="player2_info" onclick="click_ModalBtn(1,1)"></div>
            <div class="player3_info" onclick="click_ModalBtn(1,2)"></div>
            <div class="player4_info" onclick="click_ModalBtn(1,3)"></div>
         </div>

         <div class="boardbox"><!-- 게임판 박스 -->
         	<!-- toast -->
   			<div id="toast"></div>
   			<div id="toastalert"></div>
            <div class="b_center"> <!-- 게임판 가운데 부분 -->

               <!-- 주사위 굴러갈 부분, 게임로고 표시 -->
               <div class="b_diceContent">
                  <!-- 주사위 -->
                  <img class="b_dice1" alt="" src="/mamin/img/game/주사위1.png">
                  <img class="b_dice2" alt="" src="/mamin/img/game/주사위1.png">
               </div>
               <div onclick="rollDice()" class="diceBtn">
                  <!-- 주사위 굴릴 버튼 -->
                  <span>주사위 굴리기</span>
               </div>
               <div class="b_log">
                  <!-- 게임상황 로그 -->
                  <h3 class="game_info">아무개님이 서울을 구매하셨습니다.</h3>
                  <div class="btnbox"></div>
               </div>
               <div class="b_logo">
                  <!-- 로고 넣을 부분 -->

               </div>
            </div>
            <div class="b_start">

               <!-- 출발점 -->
               <!-- 게임칸 박스 생성해야함 -->
               <!--  플레이어 말, 색상, 나라명 , 통행료 표시해야함 -->
            </div>

            <div class="rowline b_row h_row bottom_row">
               <!-- 아래 줄 -->


            </div>

            <div class="b_island">
               <!-- 무인도칸 -->


            </div>

            <div class="rowline b_row v_row left_row">
               <!-- 세로줄-->


            </div>

            <div class="b_olympic">
               <!-- 올림픽칸 -->

            </div>

            <div class="rowline b_row h_row top_row">
               <!--윗줄 -->


            </div>

            <div class="b_travel">
               <!-- 세계여행 -->

            </div>
            <div class="rowline b_row v_row right_row">
               <!--  오른쪽 줄 -->

            </div>

         </div>

      </div>


   </div>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
   <script type="text/javascript" src="/mamin/js/gameBoard.js"></script>
</body>
</html>