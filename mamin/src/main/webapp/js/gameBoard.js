/*---------- 전역변수 ---------------- */
let playerTurn = 0; // 플레이어 턴 구분하기 위한 전역 변수 -> 인덱스로 사용하기
let start = false; // 맨 처음일때와 아닐때 구분해주기 위한 변수선언!
//------------수현 추가 -로그 글 ,버튼 출력 부분
let log = document.querySelector(".game_info")
let yes_btn = document.querySelector(".yes_btn")
let no_btn = document.querySelector(".no_btn")
let g_status; // 수현 추가 - 토지구매시 버튼 타입 저장하기 위한 변수
/* 
	20221104 지웅 추가
	
	room.js와 gameboard.js에서 페이지 전환 전 생성되지 않은 div 혹은 페이지 전환 후 사라진 div를 읽지 못해서
	하단 js가 실행되지 않는 문제 발생
	onmessage 분리 test
	room js에서 처리 완료
	아래 함수 게임로그 출력용으로 사용예정
*/

function gameOperate() {

}


/*============================== 수현 게임방 플레이어 관련 =========================================== */
// 임의 지정하고 있음!! 변경해야됨!!!
// 닉네임원래 객체에 넣자고 안했는데 css설정보려고 일단 넣어놨습니다.


let player = [];


/*
let player = [
	{ p_no: 1, p_nick: "또치", p_position: 0, m_no: 1, p_waiting: 0, p_money: 500000, m_img: "/mamin/img/member/1.png" },
	{ p_no: 2, p_nick: "도우너", p_position: 0, m_no: 2, p_waiting: 0, p_money: 500000, m_img: "/mamin/img/member/2.png" },
	{ p_no: 3, p_nick: "둘리", p_position: 0, m_no: 3, p_waiting: 0, p_money: 500000, m_img: "/mamin/img/member/3.png" },
	{ p_no: 4, p_nick: "희동이", p_position: 0, m_no: 4, p_waiting: 0, p_money: 500000, m_img: "/mamin/img/member/4.png" },
]
*/

/*======================================== 1103 지웅 player 세터 ==========================================*/

// 현재 플레이어 수 까지만 입력
// 조금만 변형하면 .. 걍 지금 할래
setPlayersInfo();
function setPlayersInfo() {
	for (let i = 0; i < player_list.length; i++) {
		/*
		이부분 열면 참여 인원만큼만 player 객체 입력 가능
		-4명 외 게임도 진행 시킬건지 논의 필요
		*/

		let object = {
			p_no: player_list[i].s_no,
			p_nick: player_list[i].m_nick,
			p_position: 0,
			m_no: player_list[i].m_no,
			p_waiting: 0,
			p_money: 500000, // 수현 토지구매확인하려고 50만원으로 늘렸어요!
			m_img: `/mamin/img/member/${player_list[i].m_img}`
		}
		player.push(object);
		player[i].p_nick = player_list[i].m_nick;
		player[i].m_no = player_list[i].m_no;
		player[i].m_img = `/mamin/img/member/${player_list[i].m_img}`;
	}
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
	for (let i = 1; i <= player.length; i++) {
		// 비아 - 현금 출력하도록 수정
		let nation_sum = player[i - 1].p_money			//현금 저장 변수
		for (let j = 0; j < nation.length; j++) {
			if (nation[j].owner == player[i - 1].p_no) {
				nation_sum += nation[j].n_price
			}
		}


		document.querySelector(".player" + i + "_info").innerHTML = '<div class="g_m_img">' +
			'<img width="150px" src="' + player[i - 1].m_img + '">' + // 플레이어 프로필 이미지 출력 위치
			'</div>' +
			'<div class="g_intro">' +
			'<div class="g_m_nick">' + player[i - 1].p_nick + '</div>' + //플레이어 닉네임 출력 위치
			'<div class="g_money">순자산 : ' + nation_sum + '</div>' + // 플레이어 순자산 출력 위치
			'<div class="g_cash">현금 : ' + player[i - 1].p_money + '</div>' + // 플레이어 현금 출력 위치
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
	for (let i = 0; i < player.length; i++) {
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
	console.log(playerTurn);
	console.log(player);

	if (document.querySelector('.r_sno').innerHTML != playerTurn + 1) {
		alert('다른 사람의 턴이에요.')
		return;
	}
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

// 주사위 굴러가고 다른 메소드들 실행될 수 있게 
function sleep(sec) {
	return new Promise(resolve => setTimeout(resolve, sec * 1000));
}
//////////////////////////////////// 비아 - 주사위 비동기로 수정함!!!! /////////////////////////////////////
async function display_dice(dice1, dice2) {
	await run_dice(dice1, dice2)
	await setPlayerPosition(dice1, dice2)
	await sleep(1);
	playerLocation(playerTurn)
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
	return new Promise(function(resolve, reject) {
		player[playerTurn].p_position += (dice1[9] + dice2[9]);	// 위치에 주사위 수 더하기
		// 자료형 Number -> array로 바뀌면서 파라미터의 마지막 인덱스 값으로 조정 
		if (player[playerTurn].p_position > 31) {
			player[playerTurn].p_position -= 31 // 한바퀴 돌면 -31
			// 지웅 추가 
			get_wage(playerTurn);
		}
		if (++playerTurn == player.length) { playerTurn = 0 }
		resolve()
	})

}
////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1103 지웅 이관
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
	} else {    //마지막 플레이어가 아닐 경우
		nationNo = player[playerTurn - 1].p_position    //현재 이동한 플레이어의 위치(=나라번호=n_no)
		playerNo = playerTurn - 1      //현재 이동한 플레이어 인덱스 = (p_no-1)
	}
	// 도착한 땅 안내!
	if(document.querySelector('.r_sno').innerHTML == playerNo+1){
			document.querySelector(".game_info").innerHTML
		= '' + nation[nationNo].n_name + '에 도착했습니다.'
		}
	displayLog(1)
	switch (nation[nationNo].n_type) {
		case 0: // 일반땅일떄
			console.log(nation[nationNo].n_name);

			// 비아 - 플레이어 말 위치 이동 후 소유주 확인
			checkLandLord(nationNo, playerNo)

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
	player[playerTurn].p_money += 200000;
	console.log(player[playerTurn].p_money)
}


////////////////////// 비아 - 토지 소유주 확인 //////////////////////
function checkLandLord(nationNo, playerNo) {	//playerNo : 인덱스
	console.log("현재 토지번호) " + player[playerNo].p_position)
	console.log("nation[nationNo] 소유주 번호 p_no ) " + nation[nationNo].owner)
	let p_index = 0
	if (nation[nationNo].owner == 0) {	//소유주가 없는 땅일때
		p_index = nation[nationNo].owner
		console.log("주인 없는 땅!!")

		/*===  수현 11/3 토지 구매 메소드 실행되게 넣어놓음!================================= */
		buyNation(nationNo, playerNo)

		return
	} else {		//소유주가 있는 땅일때
		p_index = nation[nationNo].owner - 1
		console.log("현재 토지의 소유주 인덱스 p_index) " + p_index)
		if (p_index == playerNo) {			//소유주가 나일때
			//건물 업그레이드
			levelUp_check(playerNo)
		} else if (p_index != playerNo) {	//다른 사람 땅일때
			//통행료 지불
			tollfee(nationNo, playerNo)
		}
	}

}

////////////////////////////////////////////////////////////////

// 1103 지웅 건물 단계 상승 함수
// 체커
function levelUp_check(playerNo) {
	let nNo = player[playerNo].p_position;	// 플레이어 위치 = 조작하는 곳의 좌표
	if (nation[nNo].n_level < 3) {
		let fee = nation[nNo].n_price * 0.5 * (nation[nNo].n_level + 1);	// 건물 값
		fee = Math.floor(fee / 1000) * 1000;	// 1000단위 절삭		
		if (checkMoney(playerNo, fee)) {	// 플레이어의 소유 재산이 건물 개발 비용보다 많은 경우
			let building_name;
			if (nation[nNo].n_level == 0) {
				building_name = "주택";
			} else if (nation[nNo].n_level == 1) {
				building_name = "빌딩";
			} else if (nation[nNo].n_level == 2) {
				building_name = "호텔";
			}
			let confirmBuild = confirm("비용 : " + fee + "\n" + building_name + "을 지으시겠습니까?");
			if (confirmBuild) {
				let object = {
					function_name: 'levelUp_land',
					data: nNo,
					data2: fee,
					data3: playerNo
				}
				gamePlayer() // 수현추가 - 플레이어 정보출력 갱신
				send(object);	// 실행할 함수 객체화 해서 서버로 전송
			}
		} else { alert('돈 부족') }
	}
}
// 1103 지웅 onMessage 통해서 모든 플레이어 실행

function levelUp_land(nNo, fee, playerNo) {
	// 객체 조작 -> 출력 분리
	nation[nNo].n_level++;
	player[playerNo].money -= fee;
	setHouse(nNo, nation[nNo].n_level); // 게임보드 주택 입력 함수	
}


// 1103 지웅 이관
function setHouse(nNo, land_level) {
	// 특정 조건에서만 발생하므로 이미지만 삽입
	if (land_level == 0) {	// 땅 매각하거나 어떤 이벤트로 땅이 초기화되는 경우
		document.querySelector('.b_house' + nNo).innerHTML = '';
	} else if (land_level == 1) {
		document.querySelector('.b_house' + nNo).innerHTML = '<i class="fas fa-home"></i>';
	} else if (land_level == 2) {
		document.querySelector('.b_house' + nNo).innerHTML = '<i class="fas fa-building"></i>';
	} else if (land_level == 3) {
		document.querySelector('.b_house' + nNo).innerHTML = '<i class="fas fa-hotel"></i>';
	}
}


/*---------------------------------------장군 11/03  통행료 -------------------------*/
///도착한곳이 남의땅일때
//현재 이동한 플레이어의 위치(=나라번호=n_no)
//현재 이동한 플레이어 인덱스 = (p_no-1)

function tollfee(nationNo, playerNo) {
	let fee = 0
	if (nation[nationNo].n_level == 0) {//건물 없을때
		fee = nation[nationNo].n_payment// 현재 땅의 통행료
	} else if (nation[nationNo].n_level == 1) {//건물 1단계 일때
		fee = Math.floor(nation[nationNo].n_payment * 1.5 / 10000) * 10000 //도착한 땅의 통행료에 1.5배 후 만단위까지
	} else if (nation[nationNo].n_level == 2) {//건물 2단계일때
		fee = Math.floor(nation[nationNo].n_payment * 1.5 * 1.5 / 10000) * 10000 //도착한 땅의 통행료에 1.5^2 배 후 만단위까지 
	} else if (nation[nationNo].n_level == 3) {//건물 3단계일때 
		fee = Math.floor(nation[nationNo].n_payment * 1.5 * 1.5 * 1.5 / 10000) * 10000 //도착한 땅의 통행료에 1.5^3 배 후 만단위까지 
	}
	inoutcome(playerNo, nationNo, fee)
}

function inoutcome(playerNo, nationNo, fee) { // 11/04 장군 
	if (checkMoney(playerNo, fee)) {
		outcome(playerNo, fee)//통행료만큼 플레이어 돈 차감
		let ownerindex = nation[nationNo].owner - 1;//땅 주인 플레이어 인덱스번호
		income(ownerindex, fee)//통행료만큼 땅주인 지급
		gamePlayer() // 수현추가 - 플레이어 정보출력 갱신
	} else {
		//파산이나 매각이나 턴종료 등등 [*** 구현 필요 ***]
		alert('돈 부족')
	}
	
}


//지급 함수
function income(playerNo, fee) {/// playerNo 플레이어인덱스,fee 지급할 액수
	player[playerNo].p_money += fee
}

//지출 함수
function outcome(playerNo, fee) {///플레이어인덱스,fee 지출 액수
	player[playerNo].p_money -= fee
}


/*------------------수현 11/03 글 출력 메소드--------------------------------- */
// log 출력시키려면 display 변경해줘야되는데 계속 사용할것같아서 함수로 만들었습니다.
function displayLog(msgtype, playerNo) {
	// 글만 출력시키면 되는 경우에는 변수로 1넣어주면되고
	// 버튼까지 출력시켜야하면 2 넣어주면 됩니다!
	if (msgtype == 1) { // 글 출력되는 부분만 display 바꿔줌
		document.querySelector(".game_info").style.display = "block"
	} else if (msgtype == 2) { // 버튼 까지 출력되게 display 변경 // yes , no 선택할때까지 주사위굴리기 버튼도 안보이게
		if(document.querySelector('.r_sno').innerHTML != playerNo+1){
			return;
		}
		document.querySelector(".diceBtn").style.display = "none";
		document.querySelector(".game_info").style.display = "block"
		document.querySelector(".yes_btn").style.display = "inline-block"
		document.querySelector(".no_btn").style.display = "inline-block"
	} else if (msgtype == 3) {// 버튼 다시 none으로 , 주사위 버튼은다시 보이게
		document.querySelector(".diceBtn").style.display = "block";
		document.querySelector(".yes_btn").style.display = "none"
		document.querySelector(".no_btn").style.display = "none"
	}
}

/*---------------- 수현  11/03 토지구매 ------------------------- */
function buyNation(nationNo, playerNo) {
	g_status=1; // 토지구매실행중 1
	// 11/4
	// 토지구매할지 선택 버튼이 상대방한테도 
	let fee = 0; // 결제할 금액 넣어주려고 사용
	log.innerHTML = '' + nation[nationNo].n_name + '을(를) 구매하시겠습니까?'
	// 토지구매 메소드 끝내기전에 주사위버튼 못누르게 숨겨둠!
	
	//********** 턴종료 함수 넣으면 이거 삭제해도 될것같음!
	displayLog(2,playerNo);
	
	
	yes_btn.addEventListener('click', yesevent)// 구매하기로 했을경우
		
	
	//document.querySelector('.btnbox').innerHTML = `<button onclick="내가 호출할 함수">yes</button>`;
	
	//document.querySelector('.btnbox').innerHTML = '';
	no_btn.addEventListener('click', () => { // 구매 안하기로 했을경우
		
					
	})
	
	
}

/*---------------  수현 테스트중----------------- */
function yesevent(){
	// 땅구매 버튼 누르면 땅만 살지 건물까지 살지 물어보기
		log.innerHTML = '토지가격 ' + nation[nationNo].n_price + '원 , <br>주택 가격 ' + (nation[nationNo].n_price / 2) + '원 입니다. 같이 구입하시겠습니까?';
		yes_btn.addEventListener('click', () => { // 주택 같이 구매
			// 주택까지 함께 구매 같이 자산에서 빠지게
			fee = (nation[nationNo].n_price + (nation[nationNo].n_price / 2));
			buyResult(playerNo, fee, nationNo) // 이 메소드에서 소유주변경까지 모두 해결
			console.log("test2")
		})
		no_btn.addEventListener('click', () => { // 토지만 구매
			fee = nation[nationNo].n_price;
			buyResult(playerNo, fee,nationNo)
			console.log("test3")
			
		})
		
		
}

function firstNo(){
	alert("ff")
	displayLog(3);
	// 턴 종료 함수 넣기
}

/*-------------------- 수현 11/4 토지구매 겹치는 부분 메소드 ------------------------------- */
function buyResult(playerNo, fee, nationNo){
	let result = checkMoney(playerNo, fee);
	if (result) { 
		outcome(playerNo, fee) //지출 메소드 요청
		//토지 소유주 변경
		nation[nationNo].owner = player[playerNo].p_no
		log.innerHTML = '구매완료했습니다.'
		console.log(player[playerNo].p_money);
		displayLog(3);// yes, no 버튼 숨기고 주사위버튼 보이게
		gamePlayer() // 수현추가 - 플레이어 정보출력 갱신
	}
	else { log.innerHTML = '자산이 부족합니다.'; return; }
}

/*----------------------  수현 토지매각------------------------------------- */
// 통행료, 황금열쇠 돈 지출시 부족하면 토지매각 실행
function saleLand(playerNo){
	// 보유한 땅 있는지 체크
	// 땅 있으면 보유한 땅 목록 출력
	// 선택받은 땅의 가격 50%가 매각가
	// 매각했는데도 자산 부족하면 또 이리로 들어와야함
	
	// 보유한 땅 담으려고
	let Landlist=[]
	// 여기에 하나도 없으면 함수종료시키기	
	for(let i=0; i<=31; i++){
		if(nation[i].owner==(playerNo+1)){
			// 맞으면 리스트에 담아두기
			Landlist.push(nation[i])
			
			
			
		}
	}
	

	
}
	
	
	


/*----------  수현 11/4 돈 부족할경우 구매안되게-------------- */
// 장군이도 같이 쓰면 좋을듯!
// 변수로 지출할 금액 받아서 그 금액보다 자산이 많으면 1 출력 아니면 0출력해서 사용하면 될듯합니다.
function checkMoney(playerNo, fee) { // 플레이어랑 지불해야할 돈 변수로 받으면 될듯합니다!
	if (player[playerNo].p_money >= fee) {
		return true; // 결제할 자산 충분하면 true
	} else return false; // 결제 금액부족하면 false
}
