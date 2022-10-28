

/*============================== 수현 게임방 플레이어 관련 =========================================== */
// 임의 지정하고 있음!! 변경해야됨!!!
let player=[
	{p_no : 1 , p_position:1 , m_no : 1 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/1.png"},
	{p_no : 2 , p_position:1 , m_no : 2 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/2.png"},
	{p_no : 3 , p_position:1 , m_no : 3 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/3.png"},
	{p_no : 4 , p_position:1 , m_no : 4 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/4.png"},
	
]
/*========================수현 보드판 생성 관련 변수 ================================ */
// owner : 0 n_type: 0 n_level :0 기본
//n_type: 1 출발점  ,  n_type: 2  황금열쇠    ,n_type: 3 무인도 	, n_type: 4	올림픽	n_type: 5	세계여행
let nation=[
	{n_no: 1, n_name: "출발점", owner : 0, n_type: 1, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 2, n_name: "타이베이", owner : 0, n_type: 0, n_price: 50000 , n_payment : 20000, n_level :0},
	{n_no: 3, n_name: "마닐라", owner : 0, n_type: 0, n_price: 80000 , n_payment : 40000, n_level :0},
	{n_no: 4, n_name: "황금열쇠", owner : 0, n_type: 2, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 5, n_name: "베이징", owner : 0, n_type: 0, n_price: 80000 , n_payment : 40000, n_level :0},
	{n_no: 6, n_name: "그리스", owner : 0, n_type: 0, n_price: 120000 , n_payment : 50000, n_level :0},
	{n_no: 7, n_name: "코펜하겐", owner : 0, n_type: 0, n_price: 120000 , n_payment : 50000, n_level :0},
	{n_no: 8, n_name: "베른", owner : 0, n_type: 0, n_price: 120000 , n_payment : 50000, n_level :0},
	{n_no: 9, n_name: "무인도", owner : 0, n_type: 3, n_price: 0 , n_payment :"", n_level :0},
	{n_no: 10, n_name: "상파울루", owner : 0, n_type: 0, n_price: 160000 , n_payment : 70000, n_level :0},
	{n_no: 11, n_name: "시드니", owner : 0, n_type: 0, n_price: 180000 , n_payment : 80000, n_level :0},
	{n_no: 12, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 13, n_name: "황금열쇠", owner : 0, n_type: 2, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 14, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 15, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 16, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 17, n_name: "올림픽", owner : 0, n_type: 4, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 18, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 19, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 20, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 21, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 22, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 23, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 24, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 25, n_name: "세계여행", owner : 0, n_type: 5, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 26, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 27, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 28, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 29, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 30, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 31, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	{n_no: 32, n_name: "하와이", owner : 0, n_type: 0, n_price: 200000 , n_payment : 80000, n_level :0},
	
	
]

let house='<i class="fas fa-home"></i>' // 1번째 건설 단계
let building='<i class="fas fa-building"></i>' // 2번째 건설 단계
let hotel='<i class="fas fa-hotel"></i>' // 3번째 건설 단계
let player1_icon='<i class="fas fa-ghost player1_icon"></i>'
let player2_icon='<i class="fas fa-ghost player2_icon"></i>'
let player3_icon='<i class="fas fa-ghost player3_icon"></i>'
let player4_icon='<i class="fas fa-ghost player4_icon"></i>'

/*======================== 수현 10/27 보드판 생성 ================================ */

gameboard()
 gamePlayer()
function gameboard(){
	//시작점
	document.querySelector(".b_start").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[0].n_name+'</div>'+
														'<div class="n_player">'+nation[0].n_price+'</div>'+
													'</div>'
						
	//무인도
	document.querySelector(".b_island").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[8].n_name+'</div>'+
														'<div class="n_player">'+nation[8].n_price+'</div>'+
													'</div>'
	//올림픽
	document.querySelector(".b_olympic").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[16].n_name+'</div>'+
														'<div class="n_player">'+nation[16].n_price+'</div>'+
													'</div>'
	//세계여행
	document.querySelector(".b_travle").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[24].n_name+'</div>'+
														'<div class="n_player">'+nation[24].n_price+'</div>'+
													'</div>'
	//오른쪽 줄
	for(let i=1; i<=7; i++){
		document.querySelector(".right_row").innerHTML
						+='<div class="g_space">'+
								'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+
								'<div class="name">'+nation[i].n_payment+'</div>'+
								'<div class="price">'+nation[i].n_name+'</div>'+
						'</div>'
		
	}
	//윗 줄
	for(let i=9; i<=15; i++){
		document.querySelector(".top_row").innerHTML
						+='<div class="g_space">'+
								'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+
								'<div class="name">'+nation[i].n_payment+'</div>'+
								'<div class="price">'+nation[i].n_name+'</div>'+
						'</div>'
		
	}
	//왼쪽 줄
	for(let i=17; i<=23; i++){
		document.querySelector(".left_row").innerHTML
						+='<div class="g_space">'+
								'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+
								'<div class="name">'+nation[i].n_payment+'</div>'+
								'<div class="price">'+nation[i].n_name+'</div>'+
						'</div>'
		
	}
	//아랫줄
	for(let i=25; i<=31; i++){
		document.querySelector(".bottom_row").innerHTML
						+='<div class="g_space">'+
								'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								
								'<span class="p_location1 location">'+player1_icon+player2_icon+player3_icon+player4_icon+'</span>'+ // 플레이어 말 출력 위치
								'<div class="name">'+nation[i].n_payment+'</div>' // 통행료 출력 위치
						'</div>'
	
	}
}//gameboard end

// 게임 참여한 플레이어 정보 가져와서 넣어줘야함
//닉네임이랑 프로필이미지
function gamePlayer(){
	// 게임에 참가한 플레이어 수만큼 반복문 돌아가게 설정해야되지만 일단 임의로 숫자 집어 넣어놨습니다.
	for(let i=1; i<=4; i++){
		console.log("player"+i+"_info")
			document.querySelector(".player"+i+"_info").innerHTML='<div class="g_m_img">'+
					'<img width="150px" src="'+player[i].m_img+'">'+
				'</div>'+
				'<div class="g_intro">'+
					'<div class="g_m_nick">'+player[i].p_no+'</div>'+	//닉네임을 가져와야되는데 그건 나중에 될것같아서 일단 플레이어번호 가져옴!
					'<div class="g_money">'+player[i].p_money+'</div>'+
				'</div>'
	}


					

	
}


/*---------수현 플레이어 위치 출력---------- */

