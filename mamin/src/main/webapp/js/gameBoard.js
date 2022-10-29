

/*============================== 수현 게임방 플레이어 관련 =========================================== */
// 임의 지정하고 있음!! 변경해야됨!!!
// 닉네임원래 객체에 넣자고 안했는데 css설정보려고 일단 넣어놨습니다.
let player=[
	{p_no : 1 , p_nick: "또치" , p_position:2 , m_no : 1 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/1.png"},
	{p_no : 2 , p_nick: "도우너" ,p_position:3 , m_no : 2 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/2.png"},
	{p_no : 3 , p_nick: "둘리" ,p_position:4 , m_no : 3 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/3.png"},
	{p_no : 4 , p_nick: "희동이" ,p_position:5 , m_no : 4 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/4.png"},
	
]
/*========================수현 보드판 생성 관련 변수 ================================ */
// owner : 0 n_type: 0 n_level :0 기본
//n_type: 1 출발점  ,  n_type: 2  황금열쇠    ,n_type: 3 무인도 	, n_type: 4	올림픽	n_type: 5	세계여행
let nation=[
	{n_no: 1, n_name: "출발점", owner : 0, n_type: 1, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 2, n_name: "타이베이", owner : 0, n_type: 0, n_price: 50000 , n_payment : 20000, n_level :0},
	{n_no: 3, n_name: "마닐라", owner : 0, n_type: 0, n_price: 80000 , n_payment : 40000, n_level :0},
	{n_no: 4, n_name: "베이징", owner : 0, n_type: 0, n_price: 80000 , n_payment : 40000, n_level :0},
	{n_no: 5, n_name: "황금열쇠", owner : 0, n_type: 2, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 6, n_name: "카이로", owner : 0, n_type: 0, n_price: 80000 , n_payment : 50000, n_level :0},
	{n_no: 7, n_name: "코펜하겐", owner : 0, n_type: 0, n_price: 80000 , n_payment : 50000, n_level :0},
	{n_no: 8, n_name: "이스탄불", owner : 0, n_type: 0, n_price: 100000 , n_payment : 50000, n_level :0},
	{n_no: 9, n_name: "무인도", owner : 0, n_type: 3, n_price: 0 , n_payment :"", n_level :0},
	{n_no: 10, n_name: "상파울루", owner : 0, n_type: 0, n_price: 100000 , n_payment : 80000, n_level :0},
	{n_no: 11, n_name: "싱가폴", owner : 0, n_type: 0, n_price: 100000 , n_payment : 80000, n_level :0},
	{n_no: 12, n_name: "아테네", owner : 0, n_type: 0, n_price: 120000 , n_payment : 80000, n_level :0},
	{n_no: 13, n_name: "황금열쇠", owner : 0, n_type: 2, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 14, n_name: "베른", owner : 0, n_type: 0, n_price: 120000 , n_payment : 80000, n_level :0},
	{n_no: 15, n_name: "리스본", owner : 0, n_type: 0, n_price: 140000 , n_payment : 80000, n_level :0},
	{n_no: 16, n_name: "마드리드", owner : 0, n_type: 0, n_price: 140000 , n_payment : 80000, n_level :0},
	{n_no: 17, n_name: "올림픽", owner : 0, n_type: 4, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 18, n_name: "오타와 ", owner : 0, n_type: 0, n_price: 180000 , n_payment : 80000, n_level :0},
	{n_no: 19, n_name: "시드니", owner : 0, n_type: 0, n_price: 180000 , n_payment : 100000, n_level :0},
	{n_no: 20, n_name: "하와이", owner : 0, n_type: 0, n_price: 180000 , n_payment : 100000, n_level :0},
	{n_no: 21, n_name: "황금열쇠", owner : 0, n_type: 2, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 22, n_name: "베를린", owner : 0, n_type: 0, n_price: 180000 , n_payment : 100000, n_level :0},
	{n_no: 23, n_name: "도쿄", owner : 0, n_type: 0, n_price: 250000 , n_payment : 100000, n_level :0},
	{n_no: 24, n_name: "파리", owner : 0, n_type: 0, n_price: 250000 , n_payment : 100000, n_level :0},
	{n_no: 25, n_name: "세계여행", owner : 0, n_type: 5, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 26, n_name: "로마", owner : 0, n_type: 0, n_price: 250000 , n_payment : 100000, n_level :0},
	{n_no: 27, n_name: "런던", owner : 0, n_type: 0, n_price: 300000 , n_payment : 120000, n_level :0},
	{n_no: 28, n_name: "뉴욕", owner : 0, n_type: 0, n_price: 300000 , n_payment : 120000, n_level :0},
	{n_no: 29, n_name: "황금열쇠", owner : 0, n_type: 2	, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 30, n_name: "부산", owner : 0, n_type: 0, n_price: 350000 , n_payment : 150000, n_level :0},
	{n_no: 31, n_name: "제주도", owner : 0, n_type: 0, n_price: 400000 , n_payment : 150000, n_level :0},
	{n_no: 32, n_name: "서울", owner : 0, n_type: 0, n_price: 1000000 , n_payment : 300000, n_level :0},
	
	
]

let house='<i class="fas fa-home"></i>' // 1번째 건설 단계
let building='<i class="fas fa-building"></i>' // 2번째 건설 단계
let hotel='<i class="fas fa-hotel"></i>' // 3번째 건설 단계
// let player1_icon='<i class="fas fa-ghost player1_icon"></i>'
// let player2_icon='<i class="fas fa-ghost player2_icon"></i>'
// let player3_icon='<i class="fas fa-ghost player3_icon"></i>'
// let player4_icon='<i class="fas fa-ghost player4_icon"></i>'

/*======================== 수현 10/27 보드판 생성 ================================ */

gameboard()
gamePlayer()
playerLocation()
// 수현 게임 보드판 출력 함수
function gameboard(){
	//시작점
	document.querySelector(".b_start").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[0].n_name+'</div>'+
														'<div class="n_player">'+nation[0].n_price+'</div>'+
														'<span class="p_location1 location"></span>'+ // 플레이어 말 출력 위치
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
	// 홈페이지에 출력이 위에서 부터 내려오는데 객체는 1번부터 출발점설정이라 i--로 설정해줘야 순서맞아서 일단 그렇게 함
	for(let i=7; i>=1; i--){
		document.querySelector(".right_row").innerHTML
						+='<div class="g_space">'+
								'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								'<span class="p_location1 location"></span>'+ // 플레이어 말 출력 위치
								'<div class="name">'+nation[i].n_payment+'</div>' // 통행료 출력 위치
						'</div>'
		
	}
	//윗 줄
	for(let i=15; i>=9; i--){
		document.querySelector(".top_row").innerHTML
						+='<div class="g_space">'+
								'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								'<span class="p_location1 location"></span>'+ // 플레이어 말 출력 위치
								'<div class="name">'+nation[i].n_payment+'</div>' // 통행료 출력 위치
						'</div>'
		
	}
	//왼쪽 줄
	//왼쪽줄은 페이지 출력순서랑 똑같아서 i++
	for(let i=17; i<=23; i++){
		document.querySelector(".left_row").innerHTML
						+='<div class="g_space">'+
								'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								'<span class="p_location1 location"></span>'+ // 플레이어 말 출력 위치
								'<div class="name">'+nation[i].n_payment+'</div>' // 통행료 출력 위치
						'</div>'
		
	}
	//아랫줄
	// 아랫줄은 페이지출력순서랑 똑같아서 i++
	for(let i=25; i<=31; i++){
		document.querySelector(".bottom_row").innerHTML
						+='<div class="g_space">'+
								'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								'<span class="p_location1 location"></span>'+ // 플레이어 말 출력 위치
								'<div class="name">'+nation[i].n_payment+'</div>' // 통행료 출력 위치
						'</div>'
	
	}
}//gameboard end

// 게임 참여한 플레이어 정보 가져와서 넣어줘야함
//닉네임이랑 프로필이미지 출력할 함수
function gamePlayer(){
	// 게임에 참가한 플레이어 수만큼 반복문 돌아가게 설정해야되지만 일단 임의로 숫자 집어 넣어놨습니다.
	for(let i=1; i<=4; i++){
			document.querySelector(".player"+i+"_info").innerHTML='<div class="g_m_img">'+
					'<img width="150px" src="'+player[i-1].m_img+'">'+ // 플레이어 프로필 이미지 출력 위치
				'</div>'+
				'<div class="g_intro">'+
					'<div class="g_m_nick">'+player[i-1].p_nick+'</div>'+ //플레이어 닉네임 출력 위치
					'<div class="g_money">'+player[i-1].p_money+'</div>'+ // 플레이어 순자산 출력 위치
				'</div>'
	}
}


/*---------수현 플레이어 위치 출력---------- */
function playerLocation(){
	// 플레이어위치랑 나라번호가 똑같으면 플레이어 출력되게
	for(let i=0; i<=3;i++){ // 한플레이어당 모든 나라 한번씩 다 확인해서 플레이어위치번호랑 나라번호가 똑같으면 위치 출력시키기
		for(let j=0; j<=31; j++){
			if(player[i].p_position==nation[j].n_no){
				console.log(player[i].p_position)
				console.log(player[i].p_position)
				// 뭔가 이상해 잘못한듯...
				
				// 플레이어 아이콘 변수에 넣어서 출력시키기
				let icon='<i class="fas fa-ghost player'+(i+1)+'_icon"></i>'
				document.querySelector(".p_location1").innerHTML+=icon
			}
		}
	}
}









