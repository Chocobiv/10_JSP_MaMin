let count_ready;
let r_sno = document.querySelector('.r_sno');








function readyCounter(){
	let count_r = 0; // ready 수 체크
	for(let i = 1 ; i<=4 ; i++){
		if(document.querySelector(`.r_ready_box${i}`).innerHTML === 'Ready'){
			count_r++;
		}	
	}
	count_ready = count_r;
}
// 20221030[지웅] userslot 출력
let m_id = document.querySelector('.H_idbox').innerHTML;
// 화면 공유를 위한 소캣 생성 [ 채팅 소켓과 사실상 동일할 수 있음 ]
let websocket = null;
if (m_id !== 'null') {
	websocket = new WebSocket('ws://localhost:8080/mamin/room/RoomSocket/' + m_id);
	// 2에서 구현된 기능을 클라이언트 소켓에 대입
	websocket.onopen = (e) => { onopen(e) };
	websocket.onclose = (e) => { onclose(e) };
	websocket.onmessage = (e) => { onmessage(e) };
	websocket.onerror = (e) => { onerror(e) };
} else {
	alert('로그인 후 이용해주세요.');
	location.href = '/mamin/view/login.jsp';
}

//20221029[지웅] websocket 기본 function에 대입할 기능 구현
function onopen(e) {}
function onerror(e) { alert(e); }
function onclose(e) { 
	readyCounter();
	alert('저 갑니다!'); }
function onmessage(obj) {
	
	let parsing = JSON.parse(obj.data);
	console.log(parsing);
	console.log(parsing.data);
	if(parsing.function_name=='addplayer'){	// 20221031 낮 언젠가... 지웅 추가
		
		addPlayer(parsing.data);
	}else if(parsing.function_name=='exit'){ // 20221031 23:49 지웅 추가
		alert('남은 자리가 없어요ㅠㅠ')
		exit();
	}else if(parsing.function_name=='ready'){
		ready(parsing.data);
	}else if(parsing.function_name=='start_game'){
		start_game();
	}
}

function send(object) {
	websocket.send(JSON.stringify(object));
}

// 20221029[지웅] 플레이어 입장 / 슬롯에 표시
function addPlayer(array){
	readyCounter(); // 서버에서 OnClose 발생 시 유저 퇴장 -> js onclose작동 안하는듯... 유저 변화시마다 ready체크
	
	let blankslot =[false,false,false,false];	
	// OnOpen 에서 입장한 유저 정보와 해당 유저의 slotNo response 받은 후 맞는 위치에 데이터 입력 
	
	console.log(array);
	
	for(let i = 0 ; i<array.length ; i++){
		let object = array[i];
		
		if(object.m_id === m_id){
			r_sno.innerHTML = object.s_no;
		}	
		
		blankslot[object.s_no-1] = true;
		let win_rate;
		if(object.total!==0){
			win_rate = (Number(object.wins) / Number(object.total)) * 100 + '%';
		}else{
			win_rate = '전적 없음';
		}
		document.querySelector(`.r_slot${object.s_no}`).innerHTML = 
				`<td class="r_p_img">
					<img src="/mamin/img/member/${object.m_img}">
				</td>
				<td class="r_name_box">${object.m_nick}</td>
				<td class="r_winrate">${win_rate}</td>
				<td class="r_ready_box${object.s_no}" onclick="readybtn(${object.s_no})">wait</td>`;
	}
	for(let i = 0 ; i<blankslot.length ; i++){
		if(!blankslot[i]){
			document.querySelector(`.r_slot${i+1}`).innerHTML = 
				`<td class="r_p_img"></td>
				<td class="r_name_box"></td>
				<td class="r_winrate"></td>
				<td class="r_ready_box${i+1}">wait</td>`;
		}
	}	
}


// 20221029[지웅] chatdisplay test용 function 
function enterKey() {
	if (window.event.keyCode == 13) {
		sendMessage();
	}
}
function sendMessage() {
	document.querySelector('.chatDisplay').innerHTML += `<div>${document.querySelector('.c_inputbox').value}</div>`;
	document.querySelector('.c_inputbox').value = '';
	document.querySelector('.chatDisplay').scrollTop = document.querySelector('.chatDisplay').scrollHeight;
}


// 20221031
function exit() {
	location.href = 'index.jsp';
}


function readybtn( s_no ){
	if(s_no == r_sno.innerHTML){
		let object = {
			function_name : 'ready',
			data : s_no
		}
		send(object);
	}else{
		alert('본인거나 누르쇼ㅗㅗ');
	}	
}

function ready(s_no){
	if(document.querySelector(`.r_ready_box${s_no}`).innerHTML != 'Ready'){
		document.querySelector(`.r_ready_box${s_no}`).innerHTML = 'Ready';
	}else{
		document.querySelector(`.r_ready_box${s_no}`).innerHTML = 'wait';
	}
	readyCounter();	
}

function open_game(){
	if(r_sno.innerHTML==1){
		let object = {
			function_name : 'start_game'
		}
		if(count_ready==1){ // 4명이 ready면 게임스타트 -> test위해 임시로 1 사용
			send(object);
		}else{
			alert('준비되지 않은 플레이어가 있어요.')
		}
	}else{
		alert('1번 플레이어만 누를 수 있어요!');
	}
}

function start_game(){
	send('closeRoom');
	alert('3초후 시작');
	setTimeout(()=>{location.href = `gameBoard.jsp?m_id=${m_id}`} ,1000 * 3);
}

