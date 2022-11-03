/*---------- 전역변수 ---------------- */
let playerTurn = 0; // 플레이어 턴 구분하기 위한 전역 변수 -> 인덱스로 사용하기
let start = false; // 맨 처음일때와 아닐때 구분해주기 위한 변수선언!

/*============================== 수현 게임방 플레이어 관련 =========================================== */
// 임의 지정하고 있음!! 변경해야됨!!!
// 닉네임원래 객체에 넣자고 안했는데 css설정보려고 일단 넣어놨습니다.

let player = [
	{ p_no: 1, p_nick: "또치", p_position: 0, m_no: 1, p_waiting: 0, p_money: 500000, m_img: "/mamin/img/member/1.png" },
	{ p_no: 2, p_nick: "도우너", p_position: 0, m_no: 2, p_waiting: 0, p_money: 500000, m_img: "/mamin/img/member/2.png" },
	{ p_no: 3, p_nick: "둘리", p_position: 0, m_no: 3, p_waiting: 0, p_money: 500000, m_img: "/mamin/img/member/3.png" },
	{ p_no: 4, p_nick: "희동이", p_position: 0, m_no: 4, p_waiting: 0, p_money: 500000, m_img: "/mamin/img/member/4.png" },
]

/*======================================== 1103 지웅 player 세터 ==========================================*/

// 현재 플레이어 수 까지만 입력
// 조금만 변형하면 .. 걍 지금 할래
setPlayersInfo();
function setPlayersInfo() {
	for (let i = 0; i < player_list.length; i++) {
		/*
		이부분 열면 참여 인원만큼만 player 객체 입력 가능
		-4명 외 게임도 진행 시킬건지 논의 필요
		
		let object ={
			p_no : player_list[i].s_no,
			p_nick : player_list[i].m_nick,
			p_position : 1,
			m_no : player_list[i].m_no,
			p_waiting : 0,
			p_money : 50000,
			m_img : `/mamin/img/member/${player_list[i].m_img}`
		}
		player.push(object);
		*/
		player[i].p_nick = player_list[i].m_nick;
		player[i].m_no = player_list[i].m_no;
		player[i].m_img = `/mamin/img/member/${player_list[i].m_img}`;
	}
	console.log(player);
}
/*========================수현 보드판 생성 관련 변수 ================================ */
// owner : 0 n_type: 0 n_level :0 기본
//n_type: 1 출발점  ,  n_type: 2  황금열쇠    ,n_type: 3 무인도 	, n_type: 4	올림픽	n_type: 5	세계여행
let nation = [
	{ n_no: 0, n_name: "출발점", owner: 0, n_type: 1, n_price: 0, n_payment: "", n_level: 0 },
	{ n_no: 1, n_name: "타이베이", owner: 0, n_type: 0, n_price: 50000, n_payment: 20000, n_level: 0 },
	{ n_no: 2, n_name: "마닐라", owner: 0, n_type: 0, n_price: 80000, n_payment: 40000, n_level: 0 },
	{ n_no: 3, n_name: "베이징", owner: 0, n_type: 0, n_price: 80000, n_payment: 40000, n_level: 0 },
	{ n_no: 4, n_name: "황금열쇠", owner: 0, n_type: 2, n_price: 0, n_payment: "", n_level: 0 },
	{ n_no: 5, n_name: "카이로", owner: 0, n_type: 0, n_price: 80000, n_payment: 50000, n_level: 0 },
	{ n_no: 6, n_name: "코펜하겐", owner: 0, n_type: 0, n_price: 80000, n_payment: 50000, n_level: 0 },
	{ n_no: 7, n_name: "이스탄불", owner: 0, n_type: 0, n_price: 100000, n_payment: 50000, n_level: 0 },
	{ n_no: 8, n_name: "무인도", owner: 0, n_type: 3, n_price: 0, n_payment: "", n_level: 0 },
	{ n_no: 9, n_name: "상파울루", owner: 0, n_type: 0, n_price: 100000, n_payment: 80000, n_level: 0 },
	{ n_no: 10, n_name: "싱가폴", owner: 0, n_type: 0, n_price: 100000, n_payment: 80000, n_level: 0 },
	{ n_no: 11, n_name: "아테네", owner: 0, n_type: 0, n_price: 120000, n_payment: 80000, n_level: 0 },
	{ n_no: 12, n_name: "황금열쇠", owner: 0, n_type: 2, n_price: 0, n_payment: "", n_level: 0 },
	{ n_no: 13, n_name: "베른", owner: 0, n_type: 0, n_price: 120000, n_payment: 80000, n_level: 0 },
	{ n_no: 14, n_name: "리스본", owner: 0, n_type: 0, n_price: 140000, n_payment: 80000, n_level: 0 },
	{ n_no: 15, n_name: "마드리드", owner: 0, n_type: 0, n_price: 140000, n_payment: 80000, n_level: 0 },
	{ n_no: 16, n_name: "올림픽", owner: 0, n_type: 4, n_price: 0, n_payment: "", n_level: 0 },
	{ n_no: 17, n_name: "오타와 ", owner: 0, n_type: 0, n_price: 180000, n_payment: 80000, n_level: 0 },
	{ n_no: 18, n_name: "시드니", owner: 0, n_type: 0, n_price: 180000, n_payment: 100000, n_level: 0 },
	{ n_no: 19, n_name: "하와이", owner: 0, n_type: 0, n_price: 180000, n_payment: 100000, n_level: 0 },
	{ n_no: 20, n_name: "황금열쇠", owner: 0, n_type: 2, n_price: 0, n_payment: "", n_level: 0 },
	{ n_no: 21, n_name: "베를린", owner: 0, n_type: 0, n_price: 180000, n_payment: 100000, n_level: 0 },
	{ n_no: 22, n_name: "도쿄", owner: 0, n_type: 0, n_price: 250000, n_payment: 100000, n_level: 0 },
	{ n_no: 23, n_name: "파리", owner: 0, n_type: 0, n_price: 250000, n_payment: 100000, n_level: 0 },
	{ n_no: 24, n_name: "세계여행", owner: 0, n_type: 5, n_price: 0, n_payment: "", n_level: 0 },
	{ n_no: 25, n_name: "로마", owner: 0, n_type: 0, n_price: 250000, n_payment: 100000, n_level: 0 },
	{ n_no: 26, n_name: "런던", owner: 0, n_type: 0, n_price: 300000, n_payment: 120000, n_level: 0 },
	{ n_no: 27, n_name: "뉴욕", owner: 0, n_type: 0, n_price: 300000, n_payment: 120000, n_level: 0 },
	{ n_no: 28, n_name: "황금열쇠", owner: 0, n_type: 2, n_price: 0, n_payment: "", n_level: 0 },
	{ n_no: 29, n_name: "부산", owner: 0, n_type: 0, n_price: 350000, n_payment: 150000, n_level: 0 },
	{ n_no: 30, n_name: "제주도", owner: 0, n_type: 0, n_price: 400000, n_payment: 150000, n_level: 0 },
	{ n_no: 31, n_name: "서울", owner: 0, n_type: 0, n_price: 1000000, n_payment: 300000, n_level: 0 },
]

let house = '<i class="fas fa-home"></i>' // 1번째 건설 단계
let building = '<i class="fas fa-building"></i>' // 2번째 건설 단계
let hotel = '<i class="fas fa-hotel"></i>' // 3번째 건설 단계
let player1_icon = '<i class="fas fa-ghost player1_icon"></i>'
let player2_icon = '<i class="fas fa-ghost player2_icon"></i>'
let player3_icon = '<i class="fas fa-ghost player3_icon"></i>'
let player4_icon = '<i class="fas fa-ghost player4_icon"></i>'


/*======================== 수현 10/27 보드판 생성 ================================ */

gameboard() // 보드판 출력
gamePlayer() // 플레이어 정보 출력
// 플레이어 위치 출력

// 수현 게임 보드판 출력 함수
function gameboard() {



	//시작점
	//p_location0 == 시작
	document.querySelector(".b_start").innerHTML = '<div class="g_space">' +
		'<div class="n_name">' + nation[0].n_name + '</div>' +
		'<div class="n_player">' + nation[0].n_price + '</div>' +
		'<span class="p_location0 location"></span>' + // 플레이어 말 출력 위치
		'</div>'

	//무인도
	document.querySelector(".b_island").innerHTML = '<div class="g_space">' +
		'<div class="n_name">' + nation[8].n_name + '</div>' +
		'<div class="n_player">' + nation[8].n_price + '</div>' +
		'<span class="p_location8 location"></span>' +
		'</div>'
	//올림픽
	document.querySelector(".b_olympic").innerHTML = '<div class="g_space">' +
		'<div class="n_name">' + nation[16].n_name + '</div>' +
		'<div class="n_player">' + nation[16].n_price + '</div>' +
		'<span class="p_location16 location"></span>' +
		'</div>'
	//세계여행
	document.querySelector(".b_travle").innerHTML = '<div class="g_space">' +
		'<div class="n_name">' + nation[24].n_name + '</div>' +
		'<div class="n_player">' + nation[24].n_price + '</div>' +
		'<span class="p_location24 location"></span>' +
		'</div>'
	//오른쪽 줄 
	// 홈페이지에 출력이 위에서 부터 내려오는데 객체는 1번부터 출발점설정이라 i--로 설정해줘야 순서맞아서 일단 그렇게 함
	for (let i = 7; i >= 1; i--) {
		//통행료 천원단위로 나오게 잘라줌
		// 밑에도 다쓰여서 나중에 이런거 더 있으면 모아서 함수로 만들어서 사용하는게 편할듯...
		let n_payment = (nation[i].n_payment / 10000) + " 만 원";

		document.querySelector(".right_row").innerHTML
			+= '<div class="g_space">' +
			'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
			'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
			'<span class="p_location' + i + '  location"></span>' + // 플레이어 말 출력 위치
			//플레이어 말 출력 부분 클래스 i 넣어서 다 다르게 만들어줌
			'<div class="n_payment">' + n_payment + '</div>' // 통행료 출력 위치
		'</div>'

	}
	//윗 줄
	for (let i = 15; i >= 9; i--) {
		//통행료 천원단위로 나오게 잘라줌
		let n_payment = (nation[i].n_payment / 10000) + " 만 원";
		document.querySelector(".top_row").innerHTML
			+= '<div class="g_space">' +
			'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
			'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
			'<span class="p_location' + i + '  location"></span>' + // 플레이어 말 출력 위치
			'<div class="n_payment">' + n_payment + '</div>' // 통행료 출력 위치
		'</div>'

	}
	//왼쪽 줄
	//왼쪽줄은 페이지 출력순서랑 똑같아서 i++
	for (let i = 17; i <= 23; i++) {
		//통행료 천원단위로 나오게 잘라줌
		let n_payment = (nation[i].n_payment / 10000) + " 만 원";
		document.querySelector(".left_row").innerHTML
			+= '<div class="g_space">' +
			'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
			'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
			'<span class="p_location' + i + '  location"></span>' + // 플레이어 말 출력 위치
			'<div class="n_payment">' + n_payment + '</div>' // 통행료 출력 위치
		'</div>'

	}
	//아랫줄
	// 아랫줄은 페이지출력순서랑 똑같아서 i++
	for (let i = 25; i <= 31; i++) {
		//통행료 천원단위로 나오게 잘라줌
		let n_payment = (nation[i].n_payment / 10000) + " 만 원";
		document.querySelector(".bottom_row").innerHTML
			+= '<div class="g_space">' +
			'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
			'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
			'<span class="p_location' + i + '  location"></span>' + // 플레이어 말 출력 위치
			'<div class="n_payment">' + n_payment + '</div>' // 통행료 출력 위치
		'</div>'

	}
	playerLocation() // 최초 플레이어 위치 출력

}//gameboard end

// 게임 참여한 플레이어 정보 가져와서 넣어줘야함
//닉네임이랑 프로필이미지 출력할 함수
function gamePlayer() {
	// 게임에 참가한 플레이어 수만큼 반복문 돌아가게 설정해야되지만 일단 임의로 숫자 집어 넣어놨습니다.
	for (let i = 1; i <= 4; i++) {
		document.querySelector(".player" + i + "_info").innerHTML = '<div class="g_m_img">' +
			'<img width="150px" src="' + player[i - 1].m_img + '">' + // 플레이어 프로필 이미지 출력 위치
			'</div>' +
			'<div class="g_intro">' +
			'<div class="g_m_nick">' + player[i - 1].p_nick + '</div>' + //플레이어 닉네임 출력 위치
			'<div class="g_money">' + player[i - 1].p_money + '</div>' + // 플레이어 순자산 출력 위치
			'</div>'
	}
}

/*---------수현 플레이어 위치 출력---------- */

function playerLocation() {
	// 플레이어 전에 위치 초기화
	// 더 좋은 방법 있으면 추천 받아여...
	for (let j = 0; j <= 31; j++) {
		document.querySelector(".p_location" + j + "").innerHTML = null;
	}
	for (let i = 0; i <= 3; i++) {
		for (let j = 0; j <= 31; j++) {
			if (player[i].p_position == nation[j].n_no) {
				switch (i) {
					case 0:  // 플레이어 객체 인덱스 번호
						document.querySelector(".p_location" + j + "").innerHTML += player1_icon;
						break
					case 1:
						document.querySelector(".p_location" + j + "").innerHTML += player2_icon;
						break
					case 2:
						document.querySelector(".p_location" + j + "").innerHTML += player3_icon;
						break
					case 3:
						document.querySelector(".p_location" + j + "").innerHTML += player4_icon;
						break
				}
			}
		}
	} // 플레이어 위치 출력 완료

	// 수현 - 위치 출력완료되면 이 플레이어가 도착한 땅의 이벤트 상태 확인해주기!

	if (start == true) {// 게임이 시작되고 나서일때!
		landEventCheck(playerTurn);
	}

}


/*
 지웅 - 11/02 추가
 rollDice -> diceBtn 함수 통해서 작동하도록 변경

 function diceBtn(){
	  console.log('test');
	let object = {
		function_name : 'rollDice'
	}
	send(object);
 } 
 각 플레이어의 난수가 모두 다르므로 메서드는 동시에 동작하나 이동값이 달라짐
 rollDice -> 난수 생성 + 이동 함수로 분할 필요
*/

/* 수현 - 10/30 주사위 굴리기 버튼 누르면 주사위 돌아가고 잠시후 멈춤 */
// 지웅 수정 -> 난수 생성/유저 위치 출력 분리
function rollDice() {
	start = true // 주사위돌리기 시작하면 게임 시작했다는 거 알리기 위한 변수

	let array1 = []
	let array2 = []
	for (let i = 0; i < 10; i++) {
		array1.push(dice1 = Math.floor((Math.random() * 6) + 1))
		array2.push(dice1 = Math.floor((Math.random() * 6) + 1))
	}
	let object = {
		function_name: `display_dice`,
		data1: array1,
		data2: array2
	}
	send(object)

	// let dice1= Math.floor((Math.random()*6)+1);
	// let dice2= Math.floor((Math.random()*6)+1);
	// 	->  모든 플레이어 주사위 display같게 하기 위해 주사위의 모든 값을 배열에 저장
}


//////////////////////////////////// 비아 - 주사위 비동기로 수정함!!!! /////////////////////////////////////
async function display_dice(dice1, dice2) {
	await run_dice(dice1, dice2)
	setPlayerPosition(dice1, dice2)
}

// 주사위가 굴러가는 모션 메소드
function run_dice(dice1, dice2) {
	return new Promise(function(resolve, reject) {
		//코드 입력
		let count = 0 // 10되면 주사위 돌아가는거 멈출 수 있게 변수 선언
		let diceLotation = setInterval(function() {
			document.querySelector(".b_dice1").src = "/mamin/img/game/주사위" + dice1[count] + ".png"
			document.querySelector(".b_dice2").src = "/mamin/img/game/주사위" + dice2[count] + ".png"
			count++
			if (count == 10)
				clearInterval(diceLotation)
		}, 100)
		resolve()	//return
	})
}

// 플레이어 포지션 업데이트 메소드
function setPlayerPosition(dice1, dice2) {
	player[playerTurn].p_position += (dice1[9] + dice2[9]);	// 위치에 주사위 수 더하기
	// 자료형 Number -> array로 바뀌면서 파라미터의 마지막 인덱스 값으로 조정 
	if (player[playerTurn].p_position > 31) {
		player[playerTurn].p_position -= 31 // 한바퀴 돌면 -31
		// 지웅 추가 
		get_wage(playerTurn);
	}
	if (++playerTurn == player.length) { playerTurn = 0 }
	playerLocation(playerTurn);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////


/*---------- 수현 10/30 건설 단계에 맞춰 주택 표시 ------ */
function setHouse() {

	// 소유주가 있는지부터 검사
	for (let i = 0; i <= 31; i++) {
		if (nation[i].owner != 0) { // 누구든지 소유주가 있으면!
			if (nation[i].n_level = 1) { // 건물단계 확인




			}

		}
	}
}


/*------------------ 수현 11/2 , 3 이벤트토지확인 ------------------------------------- */
//n_type: 1 출발점  ,  n_type: 2  황금열쇠    ,n_type: 3 무인도 	, n_type: 4	올림픽	n_type: 5	세계여행
function landEventCheck(playerTurn) {
	//주사위 돌리고 나서 플레이어의 위치의 땅의 이벤트 토지인지 아닌지 확인
	let nationNo = 0;
    let playerNo = 0;
    if (playerTurn == 0) {       //마지막 플레이어일 경우에 위에서 0으로 초기화되서 필요한 코드
       nationNo = player[player.length - 1].p_position
       playerNo = player.length - 1
    }else {    //마지막 플레이어가 아닐 경우
       nationNo = player[playerTurn - 1].p_position    //현재 이동한 플레이어의 위치(=나라번호=n_no)
       playerNo = playerTurn - 1      //현재 이동한 플레이어 인덱스 = (p_no-1)
    }
    // 도착한 땅 안내!
 	document.querySelector(".game_info").innerHTML
		=''+nation[nationNo].n_name+'에 도착했습니다.'
	document.querySelector(".game_info").style.display="block"	
	
	switch (nation[nationNo].n_type) {
		case 0: // 일반땅일떄
			console.log(nation[nationNo].n_name);
			// 비아 - 플레이어 말 위치 이동 후 소유주 확인
			checkLandLord(playerNo)
			
			break;

		case 1:  // 월급메소드
			console.log("출발지");
			break;

		case 2: // 황금열쇠메소드
			console.log("황금열쇠");
			break;

		case 3: // 무인도메소드
			console.log("무인도");
			break;

		case 4: // 올림픽메소드
			console.log("올림픽");
			break;

		case 5: //세계여행 메소드
			console.log("세계여행");
			break;
	}


}


// 지웅 11/2 월급 지급 매서드
// 지급 및 지출 매서드 생성 시 변경될 수 있음
function get_wage(playerTurn) {
	console.log(player[playerTurn].p_money)
	player[playerTurn].p_money += 200000;
	console.log(playerTurn + "턴 플레이어의 월급 지급")
	console.log(player[playerTurn].p_money)
}


////////////////////// 비아 - 토지 소유주 확인 //////////////////////
function checkLandLord(nationNo) {
	//if(playerTurn == 0)
		//alert("나라번호확인"+nationNo)
	//else
		//alert(player[playerTurn-1].p_position)
}

////////////////////////////////////////////////////////////////



/*---------------------------------------장군 11/03  통행료 -------------------------*/

/*---------------- 수현  11/3 토지구매 ------------------------- */
function buyNation(nationNo, playerNo){
	// 소유주가 없는 땅에 도착하면 출력될 메소드
	// 땅만 살지 건물까지 같이 살지 물어봐야됨
	//잔액 충분하면 구매완료 되게
	// 주택 토지가격 0.5 / 빌딩 토지가격  / 호텔 토지가격 * 1.5
	// 땅을 구매할지 부터 물어봐야함
	document.querySelector(".game_info").innerHTML
		=''+nation[nationNo].n_name+'을(를) 구매하시겠습니까?'
	document.querySelector(".game_info").style.display="block"
	document.querySelector(".yes_btn").style.display="inline-block"
	document.querySelector(".no_btn").style.display="inline-block"
	
	document.querySelector(".yes_btn").addEventListener('click',()=>{
		alert("dd");
	})
	
	
}