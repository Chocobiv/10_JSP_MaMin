

/*============================== 수현 게임방 플레이어 관련 =========================================== */
// 임의 지정하고 있음!! 변경해야됨!!!
// 닉네임원래 객체에 넣자고 안했는데 css설정보려고 일단 넣어놨습니다.
let player=[
	{p_no : 1 , p_nick: "또치" , p_position:1 , m_no : 1 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/1.png"},
	{p_no : 2 , p_nick: "도우너" ,p_position:1 , m_no : 2 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/2.png"},
	{p_no : 3 , p_nick: "둘리" ,p_position:1 , m_no : 3 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/3.png"},
	{p_no : 4 , p_nick: "희동이" ,p_position:1 , m_no : 4 , p_wating: 0 , p_money : 500000 , m_img: "/mamin/img/member/4.png"},
	
]
/*========================수현 보드판 생성 관련 변수 ================================ */
// owner : 0 n_type: 0 n_level :0 기본
//n_type: 1 출발점  ,  n_type: 2  황금열쇠    ,n_type: 3 무인도 	, n_type: 4	올림픽	n_type: 5	세계여행
let nation=[
	{n_no: 1, n_name: "출발점", owner : 0, n_type: 1, n_price: 0 , n_payment : "", n_level :0},
	{n_no: 2, n_name: "타이베이", owner : 1, n_type: 0, n_price: 50000 , n_payment : 20000, n_level :1},
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
let player1_icon='<i class="fas fa-ghost player1_icon"></i>'
let player2_icon='<i class="fas fa-ghost player2_icon"></i>'
let player3_icon='<i class="fas fa-ghost player3_icon"></i>'
let player4_icon='<i class="fas fa-ghost player4_icon"></i>'


/*======================== 수현 10/27 보드판 생성 ================================ */

gameboard() // 보드판 출력
gamePlayer() // 플레이어 정보 출력
 // 플레이어 위치 출력

// 수현 게임 보드판 출력 함수
function gameboard(){
	
	
	
	//시작점
	//p_location0 == 시작
	document.querySelector(".b_start").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[0].n_name+'</div>'+
														'<div class="n_player">'+nation[0].n_price+'</div>'+
														'<span class="p_location0 location"></span>'+ // 플레이어 말 출력 위치
													'</div>'
						
	//무인도
	document.querySelector(".b_island").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[8].n_name+'</div>'+
														'<div class="n_player">'+nation[8].n_price+'</div>'+
														'<span class="p_location8 location"></span>'+
													'</div>'
	//올림픽
	document.querySelector(".b_olympic").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[16].n_name+'</div>'+
														'<div class="n_player">'+nation[16].n_price+'</div>'+
														'<span class="p_location16 location"></span>'+
													'</div>'
	//세계여행
	document.querySelector(".b_travle").innerHTML='<div class="g_space">'+
														'<div class="n_name">'+nation[24].n_name+'</div>'+
														'<div class="n_player">'+nation[24].n_price+'</div>'+
														'<span class="p_location24 location"></span>'+
													'</div>'
	//오른쪽 줄 
	// 홈페이지에 출력이 위에서 부터 내려오는데 객체는 1번부터 출발점설정이라 i--로 설정해줘야 순서맞아서 일단 그렇게 함
	for(let i=7; i>=1; i--){
		//통행료 천원단위로 나오게 잘라줌
		// 밑에도 다쓰여서 나중에 이런거 더 있으면 모아서 함수로 만들어서 사용하는게 편할듯...
		let n_payment=(nation[i].n_payment /1000)+" 만 원";
		
		document.querySelector(".right_row").innerHTML
						+='<div class="g_space">'+
								'<div class="n_name">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								'<span class="p_location'+i+'  location"></span>'+ // 플레이어 말 출력 위치
								//플레이어 말 출력 부분 클래스 i 넣어서 다 다르게 만들어줌
								'<div class="n_payment">'+n_payment+'</div>' // 통행료 출력 위치
						'</div>'
		
	}
	//윗 줄
	for(let i=15; i>=9; i--){
		//통행료 천원단위로 나오게 잘라줌
		let n_payment=(nation[i].n_payment /1000)+" 만 원";
		document.querySelector(".top_row").innerHTML
						+='<div class="g_space">'+
								'<div class="n_name">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								'<span class="p_location'+i+'  location"></span>'+ // 플레이어 말 출력 위치
								'<div class="n_payment">'+n_payment+'</div>' // 통행료 출력 위치
						'</div>'
		
	}
	//왼쪽 줄
	//왼쪽줄은 페이지 출력순서랑 똑같아서 i++
	for(let i=17; i<=23; i++){
		//통행료 천원단위로 나오게 잘라줌
		let n_payment=(nation[i].n_payment /1000)+" 만 원";
		document.querySelector(".left_row").innerHTML
						+='<div class="g_space">'+
								'<div class="n_name">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								'<span class="p_location'+i+'  location"></span>'+ // 플레이어 말 출력 위치
								'<div class="n_payment">'+n_payment+'</div>' // 통행료 출력 위치
						'</div>'
		
	}
	//아랫줄
	// 아랫줄은 페이지출력순서랑 똑같아서 i++
	for(let i=25; i<=31; i++){
			//통행료 천원단위로 나오게 잘라줌
		let n_payment=(nation[i].n_payment /1000)+" 만 원";
		document.querySelector(".bottom_row").innerHTML
						+='<div class="g_space">'+
								'<div class="n_name">'+nation[i].n_name+'</div>'+ // 나라명 출력 위치
								'<div class="b_house"></div>'+ // 건물 출력 위치
								'<span class="p_location'+i+'  location"></span>'+ // 플레이어 말 출력 위치
								'<div class="n_payment">'+n_payment+'</div>' // 통행료 출력 위치
						'</div>'
	
	}
	
	setHouse() // 건물 출력
	playerLocation()
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
	
	// 플레이어 전에 위치 초기화
	// 더 좋은 방법 있으면 추천 받아여...
	for(let j=0; j<=31; j++){
		document.querySelector(".p_location"+j+"").innerHTML=null;
	}
	
	
	for(let i=0; i<=3; i++){
		for(let j=0; j<=31; j++){
			if(player[i].p_position==nation[j].n_no){
				switch(i){
					case 0:
						document.querySelector(".p_location"+j+"").innerHTML+=player1_icon;
						break
					case 1:
						document.querySelector(".p_location"+j+"").innerHTML+=player2_icon;
						break
					case 2 :
						document.querySelector(".p_location"+j+"").innerHTML+=player3_icon;
						break
					case 3 :
						document.querySelector(".p_location"+j+"").innerHTML+=player4_icon;
						break
				}
			}
		}
	}
	
	
	
}

let playerTurn=1; // 플레이어 턴 구분하기 위한 전역변수
/* 수현 - 10/30 주사위 굴리기 버튼 누르면 주사위 돌아가고 잠시후 멈춤 */
function rollDice(){
	let count=0 // 10되면 주사위 돌아가는거 멈출 수 있게 변수 선언
	let diceLotation=setInterval(function(){
	
	// 1~6 랜덤 발생시켜서 숫자에 맞는 주사위 이미지 출력되게
		let dice1= Math.floor((Math.random()*6)+1);
		let dice2= Math.floor((Math.random()*6)+1);
		
		count++		
		document.querySelector(".b_dice1").src="/mamin/img/game/주사위"+dice1+".png"
		document.querySelector(".b_dice2").src="/mamin/img/game/주사위"+dice2+".png"
		
		if(count==10){
			clearInterval(diceLotation)
			
			if(playerTurn%4==1){
				player[0].p_position+=(dice1+dice2);	// 위치에 주사위 수 더하기
				if(player[0].p_position>32){player[0].p_position-=32} // 한바퀴 돌면 -32
			}
			else if(playerTurn%4==2){
				player[1].p_position+=(dice1+dice2);
				if(player[1].p_position>32){player[1].p_position-=32}
			}
			else if(playerTurn%4==3){
				player[2].p_position+=(dice1+dice2);
				if(player[2].p_position>32){player[2].p_position-=32}
			}
			else if(playerTurn%4==0){
				player[3].p_position+=(dice1+dice2); 
				if(player[3].p_position>32){player[3].p_position-=32}
			}
			
			playerTurn++
			playerLocation();
		}
	
	},100)
	
}

/*---------- 수현 10/30 건설 단계에 맞춰 주택 표시 ------ */
// 플레이어별로 색깔은 어떻게 주지...
function setHouse(){
	// 소유주가 있는지부터 검사
	for(let i=0; i<=31; i++){
		if(nation[i].owner!=0){ // 누구든지 소유주가 있으면!
			if(nation[i].n_level=1){ // 건물단계 확인
				switch(nation[i].owner){ // 나라의 소유주가
					case 1:
						document.querySelector(".b_house").innerHTML=house
						break
					
				}
			}
			
		}
	}
}
