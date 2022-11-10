/*---------- 전역변수 ---------------- */
let playerTurn = 0; // 플레이어 턴 구분하기 위한 전역 변수 -> 인덱스로 사용하기
let playerNo = 0;
let start = false; // 맨 처음일때와 아닐때 구분해주기 위한 변수선언!
let click_status = 1
let worldtravel_n_no = -1	//1107 비아 추가 -> 세계여행 갈 토지번호
let playable = true;
let diceControl = true;//1108 장군 턴제어용 변수
let thisRanking = [];
let olympic_n_no = -1		//1109 비아 추가 -> 올림픽 개최 중인 나라 번호
let movable = true			//1110 비아 추가 -> 플레이어가 이동가능한지 판단하는 변수
let toastsync = false;

// 1106지웅 추가 -> 말 움직임 transition 효과 위해 x,y 고정값 저장할 변수
	// 0 ~ 8 == position bottom += 값  --  18~26 position bottom -= 값
	// 9 ~ 17 == position right += 값  -- 27~32 position right -= 값
let position_box = [0, 150, 110, 110, 110, 120, 110, 120, 110, 160, 110, 110, 110, 120, 110, 110, 140,
					0, 150, 110, 110, 110, 120, 110, 120, 110, 160, 110, 110, 110, 120, 110, 110, 140];
let nowNationNo=null; // 1108 수현추가 매각 시 현재위치 기억하기 위한 용도

// 1107 지웅 추가

// let playerColor = ['rgba(238,238,238,0.5);'  ,'rgba(40,60,99,0.5);', 'rgba(251,232,211,0.5)', 'rgba(146,138,151,0.5)', 'rgba(248,95,115,0.5)' ];
let playerColor =['rgba(238, 238, 238, 0.5)', '#283C63', '#FBE8D3', '#928A97', '#F85F73']

// 1106 지웅 추가 -> 국가 소개 modal에 불러올 대표 이미지 저장용 / nation 객체에 담아도 되지만 혼선 생길 수 있을 것 같아 나눔
// nation index <-> nation_infobox index끼리 매칭되도록 작성
let nation_infobox = [{ n_comment: '부자가 되어 돌아오세요!', n_img: '' },
{ n_comment: '온천과 야시장, 야경의 도시에 어서 오세요!', n_img: '/mamin/img/game/nation/타이베이.JPG' },
{ n_comment: '풍부한 유적과 화려한 도심, 예술의 집합지 마닐라에 어서 오세요!', n_img: '/mamin/img/game/nation/마닐라.JPG' },
{ n_comment: '대륙을 호령한 수천 년의 역사가 잠든 이곳, 베이징에 어서 오세요!', n_img: '/mamin/img/game/nation/베이징.JPG' },
{ n_comment: '어떤 행운이 기다리고 있을까요?', n_img: '' },
{ n_comment: '스핑크스가 지키는 거대한 피라미드가 있는 인류 문명의 보고<br>카이로에 어서 오세요!', n_img: '/mamin/img/game/nation/카이로.jpg' },
{ n_comment: '강인한 바이킹과 햄릿, 인어공주의 도시, 코펜하겐에 어서 오세요!', n_img: '/mamin/img/game/nation/코펜하겐.jpg' },
{ n_comment: '유럽과 아시아의 경계<br>역사 속의 명소가 살아 숨 쉬는 이스탄불에 어서 오세요!', n_img: '/mamin/img/game/nation/이스탄불.jpg' },
{ n_comment: '멈춘 게 아니라 잠시 쉬어가는 시간임을!', n_img: '' },
{ n_comment: '지구 최대의 열대우림도 좋지만, 그러기 위해선 도심에서의 휴식도 중요하죠. 남미 최대의 도시 상파울루에 어서 오세요!', n_img: '/mamin/img/game/nation/상파울루.jpg' },
{ n_comment: '첨단 도시와 아름다운 조경<br>웅장한 자연이 공존하는 싱가폴에 어서 오세요!', n_img: '/mamin/img/game/nation/싱가폴.jpg' },
{ n_comment: '인류 문명과 지성의 출발지. 신들의 도시 아테네에 어서 오세요!', n_img: '/mamin/img/game/nation/아테네.jpg' },
{ n_comment: '어떤 행운이 기다리고 있을까요?', n_img: '' },
{ n_comment: '알프스와 요들의 나라<br>상대성 이론의 고향 스위스 베른에 어서 오세요!', n_img: '/mamin/img/game/nation/베른.JPG' },
{ n_comment: 'Ola! 트램을 타고 빨간 지붕 아래를 거닐면 평화나 행복이라는 말과 제법 가까워질 거예요. 리스본에 어서 오세요!', n_img: '/mamin/img/game/nation/리스본.webp' },
{ n_comment: '문화와 예술, 축구와 스페인 왕정이 머무는 에스파냐의 중심.<br>마드리드에 어서 오세요!', n_img: '/mamin/img/game/nation/마드리드.webp' },
{ n_comment: '4년마다 열리는 세계인의 축제가, 마블의 민족에선 하루에도 몇 번이고 만나볼 수 있죠!', n_img: '' },
{ n_comment: '오로라와 눈, 나이아가라 폭포의 나라<br>케나다의 수도 오타와에 어서 오세요!', n_img: '/mamin/img/game/nation/오타와.JPG' },
{ n_comment: '캥거루와 광활한 대지, 다양한 문화와 아름다운 해변이 공존하는<br>호주에 어서 오세요!', n_img: '/mamin/img/game/nation/시드니2.png' },
{ n_comment: '휴양으로 유명한 섬은 많지만<br>천국이라고 비유되는 곳은 이곳밖에 없죠. 하와이에 어서 오세요!', n_img: '/mamin/img/game/nation/하와이1.jpg' },
{ n_comment: '어떤 행운이 기다리고 있을까요?', n_img: '' },
{ n_comment: '장벽이 있던 아픔과 강을 따라 일어난 기적부터<br>그 위에 피어난 문화가 겹겹이 쌓여있는<br>어쩌면 우리와 아주 닮아있는 베를린에 어서 오세요!', n_img: '/mamin/img/game/nation/베를린.webp' },
{ n_comment: '문화도 더할 나위 없이 아름답지만, 일단 음식과 맥주가 맛있잖아요. 더 필요한 게 있을까요? 도쿄에 어서 오세요!', n_img: '/mamin/img/game/nation/도쿄도트.gif' },
{ n_comment: '루브르와 베르사유, 몽마르트와 노트르담. 저녁 시간 유람선을 타고 세느강을 따라 흘러가다 보면, 어느새 금빛으로 몸을 휘감은 에펠탑을 만날 수 있지요. 미술과 패션의 도시 파리에 어서 오세요!', n_img: '/mamin/img/game/nation/파리.JPG' },
{ n_comment: '굳이 권장하진 않겠지만, 원한다면 무인도에 착륙시켜 보겠어요.', n_img: '' },
{ n_comment: '제국의 수도였으면서 가톨릭의 성지 바티칸을 품고 있는<br>유럽 역사의 보고, 로마에 어서 오세요!', n_img: '/mamin/img/game/nation/로마.JPG' },
{ n_comment: '유럽 경제의 중심이자 영국의 중심. 왕가의 버킹엄과 타워가 아름다운 브릿지, 세계 역사가 모여있는 박물관까지! 런던에 어서 오세요!', n_img: '/mamin/img/game/nation/런던.png' },
{ n_comment: 'America-! 여러 영화에서 이민자들이 외치곤 하는 저 말은 보통 자유의 여신상과 함께 나오죠. 세계 경제의 마천루, 뉴욕에 어서 오세요!', n_img: '/mamin/img/game/nation/뉴욕2.jpg' },
{ n_comment: '어떤 행운이 기다리고 있을까요?', n_img: '' },
{ n_comment: '해운대의 부서지는 파도부터 광안리의 찰박이는 물살까지<br>강약강약단짠단짠의 도시. 붓싼에 어서 오세요!', n_img: '/mamin/img/game/nation/부산.JPG' },
{ n_comment: '혼저옵서예~ 구멍숭숭 돌하르방, 이국적인 해변과 산의 준엄한 경치까지 모두 즐길 수 있지요. 음식은 말해 뭐해. 제주에 어서 오세요!', n_img: '/mamin/img/game/nation/제주1.JPG' },
{ n_comment: '대한민국의 중심. 서울에 어서 오세요.', n_img: '/mamin/img/game/nation/서울.JPG' },
];


/*================================= 수현 황금열쇠 객체 생성 =================================================== */
let gold_key=[
	// type에 뭘 넣기로 했더라... state는 default 0이고 사용됐으면 1주면 되나
	// 지불하고 받고 이런걸 type으로 나누기로 했던가....
	// type 1은 즉시 사용, 2는 보관가능 구분 // 
	{k_no : 0 , k_type : 1, k_name : "정기종합소득세" , k_comment : "소득세를 내야합니다. 구매한 토지 1개당 4만원씩 지불해주세요" , k_state : 0 , k_owner : 0},
	{k_no : 1 , k_type : 1 , k_name : "방범비" , k_comment : "방범비를 내야합니다. 구매한 토지 1개당 2만원씩 지불해주세요" , k_state : 0 , k_owner : 0},
	{k_no : 2 , k_type : 2 , k_name : "통행권" , k_comment : "다음번에 통행료를 내야하는 경우 한번 패스할 수 있습니다." , k_state : 0 , k_owner : 0},
	{k_no : 3 , k_type : 1 , k_name : "뒤로 이동" , k_comment : "뒤로 두칸 이동해주세요" , k_state : 0 , k_owner : 0},
	{k_no : 4 , k_type : 1 , k_name : "고속도로" , k_comment : "슈슝 출발지로 이동합니다." , k_state : 0 , k_owner : 0},
	{k_no : 5 , k_type : 1 , k_name : "복권담청" , k_comment : "축하드려요 복권 20만원에 당첨됐습니다." , k_state : 0 , k_owner : 0},
	{k_no : 6 , k_type : 1 , k_name : "생일축하" , k_comment : "생일 축하드려요 다른 플레이어가 10만원을 선물로 줬습니다." , k_state : 0 , k_owner : 0}, // 이거 모든 플레이어한테 받아야되나
	{k_no : 7 , k_type : 1 , k_name : "해외유학" , k_comment : "공부엔 끝이 없죠 10만원을 해외유학준비 비용으로 사용합니다." , k_state : 0 , k_owner : 0},
	{k_no : 8 , k_type : 1 , k_name : "기지강탈" , k_comment : "랜덤으로 뽑힌 사람이 소유한 땅 1개를 골라 무효화시킬 수 있습니다." , k_state : 0 , k_owner : 0},
	{k_no : 9 , k_type : 2 , k_name : "무인도 탈출권" , k_comment : "무인도에 갇히거든 이걸 사용해 바로 탈출할 수 있습니다." , k_state : 0 , k_owner : 0},
	{k_no : 10 , k_type : 1, k_name : "정기종합소득세" , k_comment : "소득세를 내야합니다. 구매한 토지 1개당 3만원씩 지불해주세요" , k_state : 0 , k_owner : 0},
	{k_no : 11 , k_type : 1 , k_name : "방범비" , k_comment : "방범비를 내야합니다. 구매한 토지 1개당 3만원씩 지불해주세요" , k_state : 0 , k_owner : 0},
	{k_no : 12 , k_type : 2 , k_name : "통행권" , k_comment : "다음번에 통행료를 내야하는 경우 한번 패스할 수 있습니다." , k_state : 0 , k_owner : 0},
	{k_no : 13 , k_type : 1 , k_name : "뒤로 이동" , k_comment : "뒤로 두칸 이동해주세요" , k_state : 0 , k_owner : 0},
	{k_no : 14 , k_type : 1 , k_name : "고속도로" , k_comment : "슈슝 출발지로 이동합니다." , k_state : 0 , k_owner : 0},
	{k_no : 15 , k_type : 1 , k_name : "복권담청" , k_comment : "축하드려요 복권 20만원에 당첨됐습니다." , k_state : 0 , k_owner : 0},
	{k_no : 16 , k_type : 1 , k_name : "생일축하" , k_comment : "생일 축하드려요 다른 플레이어가 10만원을 선물로 줬습니다." , k_state : 0 , k_owner : 0}, // 이거 모든 플레이어한테 받아야되나
	{k_no : 17 , k_type : 1 , k_name : "해외유학" , k_comment : "공부엔 끝이 없죠 10만원을 해외유학준비 비용으로 사용합니다." , k_state : 0 , k_owner : 0},
	{k_no : 18 , k_type : 1 , k_name : "기지강탈" , k_comment : "상대방이 소유한 땅 1개를 골라 무효화시킬 수 있습니다." , k_state : 0 , k_owner : 0},
	{k_no : 19 , k_type : 2 , k_name : "무인도 탈출권" , k_comment : "무인도에 갇히거든 이걸 사용해 바로 탈출할 수 있습니다." , k_state : 0 , k_owner : 0}
]



//------------수현 추가 -로그 글출력 부분
let log = document.querySelector(".game_info")
let saleLandCheck = true; // 매각 반복실행위한 변수설정


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
			p_money: 500000,
			m_img: `/mamin/img/member/${player_list[i].m_img}`,
			p_state:true// 11/10 장군 파산 판단용 키 추가 
			
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
	{ n_no: 0, n_name: "출발점", owner:0, n_type: 1, n_price: 0, n_payment: "", n_level: 0 },
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
let player1_icon = '<i class="fas fa-ghost player1_icon" id="player1" onclick="animateCharacter(1)"></i>'
let player2_icon = '<i class="fas fa-ghost player2_icon" id="player2" onclick="animateCharacter(2)"></i>'
let player3_icon = '<i class="fas fa-ghost player3_icon" id="player3" onclick="animateCharacter(3)"></i>'
let player4_icon = '<i class="fas fa-ghost player4_icon" id="player4" onclick="animateCharacter(4)"></i>'


/*======================== 수현 10/27 보드판 생성 ================================ */

gameboard() // 보드판 출력
gamePlayer() // 플레이어 정보 출력
playerLocation(); // 최초 플레이어 위치 출력

// 플레이어 위치 출력

// 수현 게임 보드판 출력 함수
function gameboard() {
	//[주의]!!!!!!! 비아 - 수정
	document.querySelector(".b_start").innerHTML = ''
	document.querySelector(".b_island").innerHTML = ''
	document.querySelector(".b_olympic").innerHTML = ''
	document.querySelector(".b_travel").innerHTML = ''
	document.querySelector(".right_row").innerHTML  = ''
	document.querySelector(".top_row").innerHTML = ''
	document.querySelector(".left_row").innerHTML = ''
	document.querySelector(".bottom_row").innerHTML = ''
	
	// 20221105 지웅 수정
	// 일반 땅 아닌 곳 숫자 안나오도록 수정

	//시작점
	//p_location0 == 시작
	document.querySelector('.b_start').innerHTML = '<div class="g_space">' +
		'<div class="n_name">' + nation[0].n_name + '</div>' +
		'<div class="n_player"></div>' +
		'<span class="p_location0 location"></span>' + // 플레이어 말 출력 위치
		'</div>'

	//무인도
	document.querySelector(".b_island").innerHTML = '<div class="g_space">' +
		'<div class="n_name">' + nation[8].n_name + '</div>' +
		'<div class="n_player"></div>' +
		'<span class="p_location8 location"></span>' +
		'</div>'
	//올림픽
	document.querySelector(".b_olympic").innerHTML = '<div class="g_space">' +
		'<div class="n_name">' + nation[16].n_name + '</div>' +
		'<div class="n_player"></div>' +
		'<span class="p_location16 location"></span>' +
		'</div>'
	//세계여행
	document.querySelector(".b_travel").innerHTML = '<div class="g_space">' +
		'<div class="n_name">' + nation[24].n_name + '</div>' +
		'<div class="n_player"></div>' +
		'<span class="p_location24 location"></span>' +
		'</div>'
	//오른쪽 줄 
	// 홈페이지에 출력이 위에서 부터 내려오는데 객체는 1번부터 출발점설정이라 i--로 설정해줘야 순서맞아서 일단 그렇게 함
	for (let i = 7; i >= 1; i--) {
		//통행료 천원단위로 나오게 잘라줌
		// 밑에도 다쓰여서 나중에 이런거 더 있으면 모아서 함수로 만들어서 사용하는게 편할듯...
		let n_payment = (Math.floor(nation[i].n_payment * (1 + nation[i].n_level)) / 1000 * 1000 / 10000) + " 만 원";
		// 20221105 지웅 수정
		//황금열쇠 하단 가격정보 빼기 위해 변수에 담은 후 if문으로 제어
		//황금열쇠 자리에 gold_key class부여
		let html = '<div class="g_space ncolor'+i+'" onclick="check_clickType(2, ' + i + ')">' +
			'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
			'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
			'<span class="p_location' + i + '  location"></span>'
			+ '<div class="n_payment' + i + ' n_payment">' + n_payment + '</div></div>' // 통행료 출력 위치 // 플레이어 말 출력 위치
		//플레이어 말 출력 부분 클래스 i 넣어서 다 다르게 만들어줌
		if (i == 4) {
			html = '<div class="g_space gold_key">' +
				'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
				'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
				'<span class="p_location' + i + '  location"></span>' +
				'<div class="n_payment' + i + ' n_payment"></div></div>'
		}
		document.querySelector(".right_row").innerHTML += html;
	}
	//윗 줄
	for (let i = 15; i >= 9; i--) {
		//통행료 천원단위로 나오게 잘라줌
		let n_payment = (Math.floor(nation[i].n_payment * (1 + nation[i].n_level)) / 1000 * 1000 / 10000) + " 만 원";
		// 20221105 지웅 수정
		//황금열쇠 하단 가격정보 빼기 위해 변수에 담은 후 if문으로 제어
		let html = '<div class="g_space ncolor'+i+'" onclick="check_clickType(2, ' + i + ')">' +
			'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
			'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
			'<span class="p_location' + i + '  location"></span>'
			+ '<div class="n_payment' + i + ' n_payment">' + n_payment + '</div></div>' // 통행료 출력 위치 // 플레이어 말 출력 위치
		//플레이어 말 출력 부분 클래스 i 넣어서 다 다르게 만들어줌
		if (i == 12) {
			html = '<div class="g_space gold_key">' +
				'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
				'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
				'<span class="p_location' + i + '  location"></span>' +
				'<div class="n_payment' + i + ' n_payment"></div></div>'
		}
		document.querySelector(".top_row").innerHTML += html;

	}
	//왼쪽 줄
	//왼쪽줄은 페이지 출력순서랑 똑같아서 i++
	for (let i = 17; i <= 23; i++) {
		//통행료 천원단위로 나오게 잘라줌
		let n_payment = (Math.floor(nation[i].n_payment * (1 + nation[i].n_level)) / 1000 * 1000 / 10000) + " 만 원";
		// 20221105 지웅 수정
		//황금열쇠 하단 가격정보 빼기 위해 변수에 담은 후 if문으로 제어
		let html = '<div class="g_space ncolor'+i+'" onclick="check_clickType(2, ' + i + ')">' +
			'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
			'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
			'<span class="p_location' + i + '  location"></span>'
			+ '<div class="n_payment' + i + ' n_payment">' + n_payment + '</div></div>' // 통행료 출력 위치 // 플레이어 말 출력 위치
		//플레이어 말 출력 부분 클래스 i 넣어서 다 다르게 만들어줌
		if (i == 20) {
			html = '<div class="g_space gold_key">' +
				'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
				'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
				'<span class="p_location' + i + '  location"></span>' +
				'<div class="n_payment' + i + ' n_payment"></div></div>'
		}
		document.querySelector(".left_row").innerHTML += html;
	}
	//아랫줄
	// 아랫줄은 페이지출력순서랑 똑같아서 i++
	for (let i = 25; i <= 31; i++) {
		//통행료 천원단위로 나오게 잘라줌
		let n_payment = (Math.floor(nation[i].n_payment * (1 + nation[i].n_level)) / 1000 * 1000 / 10000) + " 만 원";
		// 20221105 지웅 수정
		//황금열쇠 하단 가격정보 빼기 위해 변수에 담은 후 if문으로 제어
		let html = '<div class="g_space ncolor'+i+'" onclick="check_clickType(2, ' + i + ')">' +
			'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
			'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
			'<span class="p_location' + i + '  location"></span>'
			+ '<div class="n_payment' + i + ' n_payment">' + n_payment + '</div></div>' // 통행료 출력 위치 // 플레이어 말 출력 위치
		//플레이어 말 출력 부분 클래스 i 넣어서 다 다르게 만들어줌
		if (i == 28) {
			html = '<div class="g_space gold_key">' +
				'<div class="n_name">' + nation[i].n_name + '</div>' + // 나라명 출력 위치
				'<div class="b_house b_house' + i + '"></div>' + // 건물 출력 위치
				'<span class="p_location' + i + '  location"></span>' +
				'<div class="n_payment' + i + ' n_payment"></div></div>'
		}
		document.querySelector(".bottom_row").innerHTML += html;
	}
}//gameboard end


// 1106 지웅 추가 모달 클릭 함수
// 제일 하단에 작성하려고 했으나 이상하게 복사해서 내리면 빨간줄이 쥬루ㅡ르르르르륵 뜹니다...
// semicolon unexpected 이런거 나오길래 다시 긁어서 출력부 아래로 옮겼습니다.
// type : 1 = user정보 모달 / 2 = 토지 정보 모달 / 3 = 세계여행 갈 토지 선택
function click_ModalBtn(type, index) {
	let modal_contentsbody = document.querySelector('.modal_contentsbody');
	let modalbox = document.querySelector('.modalbox');
	if (type == 1) {
		modal_contentsbody.innerHTML = make_user_info(index);
		modalbox.style.background = '#928A97';
		document.querySelector('.modalinfoBtn').click();		//비아 위치 수정
	} else if (type == 2) {
		modal_contentsbody.innerHTML = make_nation_info(index);
		modalbox.style.background = '#FBE8D3';
		document.querySelector('.modalinfoBtn').click();		//비아 위치 수정
	} else if (type == 3) {		//1107 비아 추가
		worldtravel_n_no = index	//세계여행 갈 토지 번호를 선택한 index로 변경
	}
}

// 1106 지웅 추가 유저 소개 html 구성 후 return
function make_user_info(index) {
	let win_rate;
	if (player_list[index].total != 0) {
		win_rate = Math.floor((Number(player_list[index].wins) / Number(player_list[index].total)) * 100) + '%';
	} else {
		win_rate = '전적 없음';
	}
	let lands = '';
	for (let i = 0; i < nation.length; i++) {
		if (nation[i].owner == index + 1) {
			lands += `${nation[i].n_name} `;
		}
	}
	let html = `<div class="modal-body user_info">
					<div class="modal_top_box">
						<div class="modal_user_imgbox"><img src="${player[index].m_img}"></div>
						<div class="modal_user_namebox">${player[index].p_nick}</div>
						<div class="modal_user_nations">${lands}</div>
					</div>
					<div class="modal_btm_box">
						<table class="modal_user_data">
							<tr><td class="modal_tb_left">경기수</td><td class="modal_tb_right">${player_list[index].total}</td></tr>
							<tr><td class="modal_tb_left">승리</td><td class="modal_tb_right">${player_list[index].wins}회</td></tr>
							<tr><td class="modal_tb_left">승리</td><td class="modal_tb_right">${win_rate}</td></tr>
						</table>
					</div>
				</div>`
	return html;
}

// 1106 지웅 추가 
// 국가 소개 html구성 후 return
function make_nation_info(index) {
	let nation_payment = Math.floor(nation[index].n_payment * (Math.pow(1.5, nation[index].n_level))) / 1000 * 1000;
	if(olympic_n_no==index){nation_payment *2} // 올림픽 진행시 통행료 2배 출력
	
	let nation_price = (nation[index].n_price * 1);
	if (nation[index].n_level == 1) {
		nation_price += nation[index].n_price * 0.5;
	} else if (nation[index].n_level == 2) {
		nation_price += nation[index].n_price * 1.5;
	} else if (nation[index].n_level == 3) {
		nation_price += nation[index].n_price * 3;
	}


	let owner_name;
	if (nation[index].owner != 0) {
		owner_name = player[nation[index].owner - 1].p_nick;
	} else {
		owner_name = '소유주 없음';
	}
	let building_list = '';
	if (nation[index].n_level == 1) {
		building_list = '<img width="100px;" src="/mamin/img/game/building/주택.png">';
	} else if (nation[index].n_level == 2) {
		building_list = '<img width="100px;" src="/mamin/img/game/building/주택.png">'
			+ '<img width="100px;" src="/mamin/img/game/building/빌딩.png">';
	} else if (nation[index].n_level == 3) {
		building_list = '<img width="100px;" src="/mamin/img/game/building/주택.png">'
			+ '<img width="100px;" src="/mamin/img/game/building/빌딩.png">'
			+ '<img width="100px;" src="/mamin/img/game/building/호텔2.png">';
	}

	let html = `<div class="modal-body nation_info">
					<div class="modal_top_box">
						<div class="modal_nation_imgbox"><img src="${nation_infobox[index].n_img}"></div>
						<div class="modal_nation_namebox">${nation[index].n_name}</div>
						<div class="modal_nation_comment">${nation_infobox[index].n_comment}</div>
					</div>
					<div class="modal_nation_infobox">
						<table class="modal_btm_box">
							<tr><td class="modal_tb_left">소유주</td><td class="modal_tb_right">${owner_name}</td></tr>
							<tr><td class="modal_tb_left">건물 정보</td><td class="modal_tb_right">${building_list}</td></tr>
							<tr><td class="modal_tb_left">통행료</td><td class="modal_tb_right">${nation_payment}원</td></tr>
							<tr><td class="modal_tb_left">토지 가치</td><td class="modal_tb_right">${nation_price}원</td></tr>
						</table>
					</div>
				</div>`;
	document.querySelector(".n_payment").innerHTML=nation_payment
	return html;
}

//20221107 지웅 추가, nation click type 분할
//1107 비아 추가 - 세계여행
function check_clickType(mtype, index) {
	if (click_status == 1) {
		click_ModalBtn(mtype, index);
	} else if (click_status == 2) {
		//세계여행 매서드, 제일 앞 click_status는 세계여행 실행할 때 2로 넣어주시고 끝나면 다시 1로 돌려주세요.
		// mtype은 임의로 지정해서 의미없는 값, index에 나라 좌표 index 들어가면 될 거 같습니다.
		click_ModalBtn(3, index)
		/*if (worldtravel_n_no == 24) {	//세계여행을 선택했을 경우
			alert('다른 나라를 선택하세요.')
			return
		} else {		//세계여행 외의 나라를 선택했을 경우*/
		// 세계여행을 떠나는 함수

		//플레이어 위치 이동
		player[playerNo].p_position = worldtravel_n_no
		//소켓 통신

		let object = {
			function_name: 'updatePlayerPosition',
			playerNo: playerNo,
			n_no: worldtravel_n_no
		}
		send(object)

		//월급 지급
		//1~23 사이의 숫자로 이동 -> 월급 지급o
		//25~31 사이의 숫자로 이동-> 월급 지급x
		if (worldtravel_n_no >= 1 && worldtravel_n_no <= 23) {
			//get_wage(player[playerNo].p_no-1)
			//소켓 통신
			let object = {
				function_name: 'get_wage',
				playerTurn: player[playerNo].p_no - 1
			}
			send(object)
		}
	}
}


// 게임 참여한 플레이어 정보 가져와서 넣어줘야함
//닉네임이랑 프로필이미지 출력할 함수
function gamePlayer() {
	// 게임에 참가한 플레이어 수만큼 반복문 돌아가게 설정해야되지만 일단 임의로 숫자 집어 넣어놨습니다.
	for (let i = 1; i <= player.length; i++) {
		let nation_sum = calculateMoney(i)
		document.querySelector(".player" + i + "_info").innerHTML =
			`<div class="g_m_img">
					<img class="ingameProfile" src="${player[i - 1].m_img}">										
				</div>
				<div class="g_m_info">
					<div class="g_moneyDisplay">
						<div class="g_cal_rank${i}" id="g_cal_rank${i}">집계중..</div>
						<div class="g_cash">현금 : ${player[i - 1].p_money.toLocaleString()}원 </div> <span class="g_money">(순자산)${nation_sum.toLocaleString()}원</span>
					</div>
					<div class="g_m_nick">${player[i - 1].p_nick}</div>
				</div>`;
	}
	
}


///////////////////// 비아 - 순자산 계산 메소드[11/04] /////////////////////
function calculateMoney(i) {
	let nation_sum = player[i - 1].p_money			//순자산 저장 변수
	for (let j = 0; j < nation.length; j++) {
		if (nation[j].owner == i) {
			nation_sum += nation[j].n_price
		}
	}
	return nation_sum
}
/////////////////////////////////////////////////////////////////////


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




/* 수현 - 10/30 주사위 굴리기 버튼 누르면 주사위 돌아가고 잠시후 멈춤 */
// 지웅 수정 -> 난수 생성/유저 위치 출력 분리
function rollDice() {
	if (diceControl == false) {//11.8 장군 추가
		alert('턴 진행중');
		return;
	}

	if (document.querySelector('.r_sno').innerHTML != playerTurn + 1) {
		alert('다른 사람의 턴이에요.')
		return;
	}
	let statuschange = {//11.8 장군 추가
		function_name: 'turn_off'
	}
	send(statuschange);
	start = true; // 주사위돌리기 시작하면 게임 시작했다는 거 알리기 위한 변수

	let array1 = []
	let array2 = []
	for (let i = 0; i < 10; i++) {
		array1.push(dice1 = Math.floor((Math.random() * 6) + 1))
		array2.push(dice1 = Math.floor((Math.random() * 6) + 1))
	}
	let object = {
		function_name: `display_dice`,
		data1: array1,
		data2: array2,

	}

	send(object)

}

// 주사위 굴러가고 다른 메소드들 실행될 수 있게 
function sleep(sec) {
	return new Promise(resolve => setTimeout(resolve, sec * 1000));
}
//////////////////////////////////// 비아 - 주사위 비동기로 수정함!!!! /////////////////////////////////////
async function display_dice(dice1, dice2) {
	playable = false;
	await run_dice(dice1, dice2)			//주사위가 굴러가는 모션
	await setPlayerPosition(dice1, dice2)	//플레이어 포지션 업데이트
	await sleep(1);
	playerLocation(playerTurn)				//플레이어 위치 출력
}

// 주사위가 굴러가는 모션 메소드
function run_dice(dice1, dice2) {
	log.innerHTML = "	"
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

		//비아 - 1110 무인도 수정
		if (player[playerTurn].p_waiting > 0) {	//현재 플레이 중인 플레이어의 p_waiting이 0보다 크면
			//여기에 황금열쇠[무인도탈출권] 소유하고 있는지 체크 필요!
			if (dice1[9] != dice2[9]) {	//주사위 2개가 같은 숫자가 아니면
				movable = false		//이동 불가능하도록 false값 대입
				//플레이어의 p_waiting-- 소켓통신
				sendFailEscapeDesertedIsland(playerTurn)
				//end_turn()	//턴종료하면 게임을 나가버림...
				//reject()  턴종료가 안됨
				//resolve()					//이동해버림

			} else {		//주사위 2개가 같은 숫자이면
				sendEscapeDesertedIsland(playerTurn)
			}
		} else movable = true
		if (movable) {
			player[playerTurn].p_position += (dice1[9] + dice2[9]);	// 위치에 주사위 수 더하기
			// 자료형 Number -> array로 바뀌면서 파라미터의 마지막 인덱스 값으로 조정 
			if (player[playerTurn].p_position > 31) {
				player[playerTurn].p_position -= 31 // 한바퀴 돌면 -31
				// 지웅 추가 
				get_wage(playerTurn);
			}
		}
		if (++playerTurn == player.length) { playerTurn = 0 }
		let p_state = player[playerTurn].p_state;//11/10 장군추가 파산한 플레이어 턴이면 턴바로 넘어가게 제어
		if (!p_state) {
			playerTurn++;
			end_turn();
		}
		resolve()
	})
}

////////////////////////////////////////////////////////////////////////////////////////////////////////


/*------------------ 수현 11/2 , 3 이벤트토지확인 ------------------------------------- */
//n_type: 1 출발점  ,  n_type: 2  황금열쇠    ,n_type: 3 무인도 	, n_type: 4	올림픽	n_type: 5	세계여행
function landEventCheck(playerTurn) {
	//주사위 돌리고 나서 플레이어의 위치의 땅의 이벤트 토지인지 아닌지 확인
	let nationNo = 0;
	if (playerTurn == 0) {       //마지막 플레이어일 경우에 위에서 0으로 초기화되서 필요한 코드
		nationNo = player[player.length - 1].p_position
		playerNo = player.length - 1
	} else {    //마지막 플레이어가 아닐 경우
		nationNo = player[playerTurn - 1].p_position    //현재 이동한 플레이어의 위치(=나라번호=n_no)
		playerNo = playerTurn - 1      //현재 이동한 플레이어 인덱스 = (p_no-1)
	}
	// 도착한 땅 안내!
	if (document.querySelector('.r_sno').innerHTML == playerNo + 1) {
		document.querySelector(".game_info").innerHTML
			= '' + nation[nationNo].n_name + '에 도착했습니다.'
	}
	document.querySelector(".game_info").style.display = "block"
	if (document.querySelector('.r_sno').innerHTML != playerNo + 1) {
		return
	}
	switch (nation[nationNo].n_type) {
		case 0: // 일반땅일떄

			// 비아 - 플레이어 말 위치 이동 후 소유주 확인
			checkLandLord(nationNo, playerNo)

			break;

		case 1:  // 월급메소드
			// 여기 들어가면 앞으로 진행이 안돼서 일단 end_turn() 넣어놨습니다. 메소드 구현되면 삭제해주세요!
			end_turn()
			break;

		case 2: // 황금열쇠메소드
			openGoldkey(playerNo)	//수현추가
			break;

		case 3: // 무인도메소드
		/*
			if(movable){
				console.log("무인도");
				// 여기 들어가면 앞으로 진행이 안돼서 일단 end_turn() 넣어놨습니다. 메소드 구현되면 삭제해주세요!
				//1107 지웅 추가
				toast('<h3 class="toast_title">잠깐 쉬어가도 좋을까요?</h3><img width="300px;" src="/mamin/img/game/toast/무인도토스트.JPG">');
				// 비아 - 1110 추가
				sendDesertedIsland(playerNo)
				log.innerHTML = '<div> 이런! 2턴 동안 무인도에 갇힙니다. </div>'
			}
		*/
			end_turn()
			break;

		case 4: // 올림픽메소드
			//1107 지웅 추가
			toast('<h3 class="toast_title">축제가 열리면 누군가는 부자가 될걸요?</h3><img width="500px;" src="/mamin/img/game/toast/올림픽토스트.jpg">');

			arriveOlympic(playerNo)	//비아추가 1109

			// 여기 들어가면 앞으로 진행이 안돼서 일단 end_turn() 넣어놨습니다. 메소드 구현되면 삭제해주세요!
			end_turn()
			break;



		case 5: // 비아 - 세계여행 메소드
			// 20221107 지웅 추가
			// 세계여행 발생시 토스트 이벤트로 이미지 띄워주기
			// send로 모두에게 보여줘야 할까요?
			let toastString = '<h3 class="toast_title">여행이다!</h3><img width="300px;" src="/mamin/img/game/toast/여행토스트.JPG">';
			toast(toastString);
			goWorldtravel()

			break;
	}
	return		//꼭 필요! [11/09] 추가
}


// 지웅 11/2 월급 지급 매서드
// 지급 및 지출 매서드 생성 시 변경될 수 있음
function get_wage(playerTurn) {
	player[playerTurn].p_money += 200000;
	gamePlayer() // 플레이어 정보출력 갱신
	toast2('<h3 class="toast_title">월급...이었던 것</h3><image width="300px;" src="/mamin/img/game/toast/월급토스트2.JPG">');
}


////////////////////// 비아 - 토지 소유주 확인 //////////////////////
function checkLandLord(nationNo, playerNo) {	//playerNo : 인덱스
	if (nation[nationNo].owner == 0) {	//소유주가 없는 땅일때

		/*===  수현 11/3 토지 구매 메소드 실행되게 넣어놓음!================================= */
		buyNation(nationNo, playerNo)
	} else if (nation[nationNo].owner != 0) {		//소유주가 있는 땅일때
		let p_index = nation[nationNo].owner - 1
		if (nation[nationNo].owner == player[playerNo].p_no) {			//소유주가 나일때
			//건물 업그레이드
			// 11/5 수현 추가!!!!!!!! 이미 건물레벨이 최상이면 메소드 실행안되고 턴종료되게!!!
			if (nation[nationNo].n_level == 3) {
				log.innerHTML =""
				log.innerHTML = "더 이상 건물을 업그레이드할 수 없습니다."
				setTimeout(() => {
					end_turn()		//턴종료
				}, 2000)
				return;
			}
			levelUp_check(playerNo)
		} else if (nation[nationNo].owner != player[playerNo].p_no) {	//다른 사람 땅일때
			//통행료 지불
			tollfee(nationNo, playerNo)
		}
	}
}

////////////////////////////////////////////////////////////////

// 1103 지웅 건물 단계 상승 함수
// 체커
// 11/05 수현 컨펌 -> 로그로 수정
function levelUp_check(playerNo) {
	let nNo = player[playerNo].p_position;   // 플레이어 위치 = 조작하는 곳의 좌표
	let fee = nation[nNo].n_price * 0.5 * (nation[nNo].n_level + 1);   // 건물 값
	fee = Math.floor(fee / 1000) * 1000;   // 1000단위 절삭   


	if (document.querySelector('.r_sno').innerHTML == playerNo + 1) {
		if (checkMoney(playerNo, fee)) {   // 플레이어의 소유 재산이 건물 개발 비용보다 많은 경우
			let building_name = null
			if (nation[nNo].n_level == 0) { building_name = "주택"; }
			else if (nation[nNo].n_level == 1) { building_name = "빌딩"; }
			else if (nation[nNo].n_level == 2) { building_name = "호텔"; }

			log.innerHTML = building_name + '으로 업그레이드 하시겠습니까?<br> 비용 : ' + fee.toLocaleString()
			document.querySelector(".btnbox").innerHTML
				= '<button class="yes_btn Btnyes">YES</button><button class="no_btn Btnno">NO</button>'

			// 버튼 이벤트
			document.querySelector(".yes_btn").addEventListener('click', () => {
				let object = {
					function_name: 'levelUp_land',
					data: nNo,
					data2: fee,
					data3: playerNo
				}
				log.innerHTML = "업그레이드 완료했습니다."
				document.querySelector(".btnbox").innerHTML = ""
				send(object);   // 실행할 함수 객체화 해서 서버로 전송
				gamePlayer() // 수현추가 - 플레이어 정보출력 갱신
			})
			document.querySelector(".no_btn").addEventListener('click', () => {
				log.innerHTML = "업그레이드하지 않습니다."
				document.querySelector(".btnbox").innerHTML = ""
				end_turn();
				return;
			})
		} else {
			log.innerHTML = "건물 업그레이드 할 비용이 없습니다."
			end_turn()
		}
	}
}

function levelUp_land(nNo, fee, playerNo) {
	//비아 수정
	// 객체 조작 -> 출력 분리
	nation[nNo].n_level++;
	player[playerNo].p_money -= fee;
	gamePlayer() // 1105 수현 추가
	setHouse(nNo, nation[nNo].n_level, playerNo);
	if (document.querySelector('.r_sno').innerHTML != playerNo + 1) {//11/10장군 추가
		return
	}

	setTimeout(() => {
		end_turn()
	}, 2000)
	// 게임보드 주택 입력 함수   

	return;
}


// 1103 지웅 이관
// 1104 비아 이관 - 각 플레이어 별로 색 다르게 지정
function setHouse(nNo, land_level, playerNo) {
	console.log('!!!setHouse!!!')
	document.querySelector(".n_payment"+nNo+"").innerHTML=(Math.floor(nation[nNo].n_payment * Math.pow(1.5, nation[nNo].n_level)) / 1000 * 1000 / 10000) + " 만 원"
	// 특정 조건에서만 발생하므로 이미지만 삽입
	if (land_level == 0) {	// 땅 매각하거나 어떤 이벤트로 땅이 초기화되는 경우
		document.querySelector('.b_house' + nNo).innerHTML = ''
	} else if (land_level == 1) {
		document.querySelector('.b_house' + nNo).innerHTML = '<i class="fas fa-home" ' + playerNo + '"></i>'
	} else if (land_level == 2) {
		document.querySelector('.b_house' + nNo).innerHTML = '<i class="fas fa-building" ' + playerNo + '"></i>'
	} else if (land_level == 3) {
		document.querySelector('.b_house' + nNo).innerHTML = '<i class="fas fa-hotel" ' + playerNo + '"></i>'
	}
}

/*---------------------------------------장군 11/03  통행료 -------------------------*/
///도착한곳이 남의땅일때
//현재 이동한 플레이어의 위치(=나라번호=n_no)
//현재 이동한 플레이어 인덱스 = (p_no-1)

function tollfee(nationNo, playerNo) {
	// 1108 수현 추가!!!!!! -- 매각을 황금열쇠때도 사용하기 위해서 전역변수로 선언
	nowNationNo = nationNo

	let fee = Math.floor(nation[nationNo].n_payment * (Math.pow(1.5 ,nation[nationNo].n_level))) / 1000 * 1000
	let index=null; // 황금열쇠 통행료면제권 담기위한 변수
	console.log('통행료 올림픽 계산 전) ' + fee)
	//*** 1105 수현 수정!!! -- 
	if (document.querySelector('.r_sno').innerHTML == playerNo + 1) {
		//1109 비아 추가 - 만약에 올림픽 개최지면 통행료 2배
		if (olympic_n_no == nation[nationNo].n_no) {fee *= 2}
		log.innerHTML = '통행료 : ' + fee.toLocaleString() + '원'
		if(gold_key[2].k_owner==playerNo){index=2}	// 1110 수현 추가!!! 황금열쇠 통행료면제권 관련!!!
		else if(gold_key[12].k_owner==playerNo){index=12}
		if(index!=null){ 
			// 통행료 면제시켜주고 이거 오너 없애줘야돼
			log.innerHTML="황금열쇠 통행료면제권을 사용합니다"
			let object={
				object_name : "gold_key",
				index : index
			}
			send(object)
			setTimeout(()=>{end_turn()},1000)
			return;
		}
		let result = checkMoney(playerNo, fee)
		if (result) {
			inoutcome(playerNo, nationNo, fee)
		} else {
			log.innerHTML = "현금이 부족해 매각해야합니다."
			printLandList(playerNo, fee, 1) // 통행료를 지불해야했던 토지번호도 가지고가야함!!
		}

	}

	gamePlayer()
}

//1105 수현 수정
function inoutcome(playerNo, nationNo, fee) { // 11/04 장군 

	outcome(playerNo, fee)//통행료만큼 플레이어 돈 차감
	let ownerindex = nation[nationNo].owner - 1;//땅 주인 플레이어 인덱스번호
	income(ownerindex, fee)//통행료만큼 땅주인 지급

	playerMoneyUpdate(playerNo, ownerindex) // 1107 수현 추가 -- 통행료 지불 자산 업데이트
	//gamePlayer() // 수현추가 - 플레이어 정보출력 갱신
	log.innerHTML += "<br>통행료 지불 완료됐습니다."

	setTimeout(() => {
		end_turn()
	}, 2000)
	return;
}


//지급 함수
function income(playerNo, fee) {/// playerNo 플레이어인덱스,fee 지급할 액수
	player[playerNo].p_money += fee
}

//지출 함수
function outcome(playerNo, fee) {///플레이어인덱스,fee 지출 액수
	player[playerNo].p_money -= fee
}


/*---------------- 수현  11/03 토지구매 ------------------------- */
function buyNation(nationNo, playerNo) {
	const log = document.querySelector(".game_info");
	if (document.querySelector('.r_sno').innerHTML == playerNo + 1) {
		let fee = 0; // 결제할 금액 넣어주려고 사용
		log.innerHTML = '' + nation[nationNo].n_name + '을(를) 구매하시겠습니까?<br>가격 : ' + nation[nationNo].n_price.toLocaleString() + '원'

		document.querySelector(".btnbox").innerHTML // 최초 선택 버튼 출력
			= '<button class="yes_btn Btnyes">YES</button><button class="no_btn Btnno">NO</button>'

		document.querySelector(".yes_btn").addEventListener('click', () => {// 구매하기로 했을경우
			if (checkMoney(playerNo, nation[nationNo].n_price) == false) {
				log.innerHTML = "현금이 부족합니다."; document.querySelector(".btnbox").innerHTML = ""
				setTimeout(() => {
					end_turn()		//턴종료
				}, 1500)
				return
			}
			// 땅구매 버튼 누르면 땅만 살지 건물까지 살지 물어보기
			log.innerHTML = '건물도 함께 구매하시겠습니까? <br> 주택 가격 : ' + (nation[nationNo].n_price / 2).toLocaleString() + '원';
			document.querySelector(".btnbox").innerHTML	// 버튼 출력한번더
				= '<button class="yes_btn2 Btnyes">YES</button><button class="no_btn2 Btnno">NO</button>'

			document.querySelector(".yes_btn2").addEventListener('click', () => { // 주택 같이 구매
				fee = (nation[nationNo].n_price + (nation[nationNo].n_price / 2));
				if (!checkMoney(playerNo, fee)) {
					log.innerHTML = "건물을 구매할 자산이 부족합니다. 토지만 구매합니다."; document.querySelector(".btnbox").innerHTML = ""
					setTimeout(() => {
						buyResult(playerNo, nation[nationNo].n_price, nationNo, 0) // 토지만 구매
						sendNationPlayer(nationNo, playerNo, 0) // 토지만 구매하면 n_level 0 으로 넘기기
					}, 1500)

					end_turn()
					return
				}

				buyResult(playerNo, fee, nationNo, 1) // 이 메소드에서 소유주변경까지 모두 해결

				// 비아추가 - nation(소유주) / player(현금,자산) 소켓 전달
				sendNationPlayer(nationNo, playerNo, 1) // 11/5 수현 변수 추가!!!!!! - 주택까지 구매할경우

				setHouse(nationNo, nation[nationNo].n_level, playerNo)	// 게임보드 주택 입력 함수
				end_turn()		//턴종료
				return
			})
			document.querySelector(".no_btn2").addEventListener('click', () => { // 토지만 구매
				//토지만 구매하는건 위에서 자산확인 했으니까 그냥 바로 구매!
				buyResult(playerNo, nation[nationNo].n_price, nationNo, 0)
				// 비아추가 - nation(소유주) / player(현금,자산) 소켓 전달
				sendNationPlayer(nationNo, playerNo, 0) // 토지만 구매하면 n_level 0 으로 넘기기

				setHouse(nationNo, nation[nationNo].n_level, playerNo)	// 게임보드 주택 입력 함수
				end_turn()		//턴종료
				return
			})

		})
		document.querySelector(".no_btn").addEventListener('click', () => { // 구매 안하기로 했을경우
			log.innerHTML = "구매하지 않습니다."
			document.querySelector(".btnbox").innerHTML = ""

			setTimeout(() => {
				end_turn()
			}, 1000)
		})

	}

}


/*-------------------- 수현 11/4 토지구매 겹치는 부분 메소드 ------------------------------- */
function buyResult(playerNo, fee, nationNo, type) {
	// 수현 11/5 추가
	// type 1이면 주택까지 함께구매로 건물레벨 상승
	// 0이면 그냥 토지만 구매

	outcome(playerNo, fee) //지출 메소드 요청
	//토지 소유주 변경
	nation[nationNo].owner = player[playerNo].p_no
	if (type == 1) { nation[nationNo].n_level = 1; }
	log.innerHTML = '구매완료했습니다.'
	//yse , no 버튼 없애기
	document.querySelector(".btnbox").innerHTML = ""

}

/*----------------------  수현 토지매각 리스트 출력------------------------------------- */
// 통행료, 황금열쇠 돈 지출시 부족하면 토지매각 실행
function printLandList(playerNo, fee, type) { // type 1 : 통행료 지불 // type 2 : 일단 황금열쇠 지불 이벤트
	// 보유한 땅 담으려고
	let Landlist = []
	// 여기에 하나도 없으면 함수종료시키기
	// -> 파산	
	for (let i = 0; i < nation.length; i++) {
		if (nation[i].owner == (playerNo + 1)) {
			// 맞으면 리스트에 담아두기
			Landlist.push(nation[i])
		}
	}
	//*****  파산메소드 넣어야함!!!												// 파산메소드 해결되면 return 대신 넣어주세요!
	//if (Landlist.length < 1) { console.log("매각할 토지없음"); log.innerHTML = "매각할 땅이 없습니다. 파산!!";  isBankrupt(playerNo, fee); }
	log.innerHTML=""									
	if (Landlist.length < 1) { console.log("매각할 토지없음"); log.innerHTML = "매각할 땅이 없습니다. 파산!!";  isBankrupt(playerNo); return; } 

	let html = fee + "원을 지불하기 위해 매각할 땅을 선택해주세요"
	Landlist.forEach(l => {
		html += '<div onclick="saleLand(' + l.n_no + ',' + playerNo + ',' + fee + ',' + type + ')">' + l.n_name + '</div>'
	})
	log.innerHTML = html
}
/*--------------- 수현 토지매각 실행 ----------------- */
function saleLand(n_no, playerNo, fee, type) {
	// 소유주 , 건물단계 리셋
	// 매각가는 50%
	log.innerHTML = nation[n_no].n_name + '가 매각됐습니다.'
	player[playerNo].p_money += (nation[n_no].n_price / 2)
	nation[n_no].owner = 0;
	nation[n_no].n_level = 0;

	sendNationPlayer(n_no, -1, 0)
	// owner 없애주려고 pno -1 으로 넘김
	// nation 객체 정보변경사항 소켓전달

	// 1초만 있다가 실행되게
	if (fee > player[playerNo].p_money) {
		//매각해도 자산이 부족하면
		log.innerHTML = "아직 비용을 지불할 수 없습니다."
		if (type == 1) {
			setTimeout(() => { printLandList(playerNo, fee, 1) }, 2000)
		} else if (type == 2) {
			setTimeout(() => { printLandList(playerNo, fee, 2) }, 2000)
		}
		end_turn();
		return;
	} else {// 금액이 맞으면 // 통행료지불 재진행
		if (type == 1) {
			setTimeout(() => { // 통행료
				inoutcome(playerNo, nowNationNo, fee)
			}, 2000)
		} else if (type == 2) { // 황금열쇠
			setTimeout(() => {
				outcome(playerNo, fee)
			}, 2000)
		}
		end_turn();
	}
}


/*----------  수현 11/4 돈 부족할경우 구매안되게-------------- */
function checkMoney(playerNo, fee) {
	if (player[playerNo].p_money >= fee) {
		return true; // 결제할 자산 충분하면 true
	} else return false; // 결제 금액부족하면 false
}


/////////// 수현 11/08 황금열쇠 뽑기 메소드 ////////////////
function openGoldkey(playerNo) {
	// 황금열쇠토지에 도착하면
	// 20개중 랜덤으로 하나 뽑히고
	// 바로 사용가능한 건 바로바로 보관가능한건 가지고 있다가
	// 무인도, 통행권무료에 메소드 추가해서 황금열쇠 가지고 있는지 확인해주기

	if (document.querySelector(".r_sno").innerHTML != playerNo + 1) { return; }

	let randKey = null;
	while (true) {// 사용하지 않은 황금열쇠 숫자를 뽑을때까지 반복
		randKey = Math.floor(Math.random() * 19)
		// 황금열쇠 state가 1이 아닌 애들만 뽑힐 수 있게
		// 1이면 이미 사용됐음
		if (gold_key[randKey].k_state != 1) { break; }
		
		//20221110 지웅 추가
			// 무한루프 방지 코드
		let countingcards = 0;
		for(let i = 0 ; i<gold_key.length ; i++){
			if(gold_key[i].k_state==1){
				countingcards++;
			}
		}
		if(countingcards==20){break;}
		// state가 전부 1이면 어떻게하지
	}

	// 황금열쇠 소유자 주고 , type 1인지 2인지 구분 , k_state 변경
	gold_key[randKey].k_owner = player[playerNo].p_no // 소유자 변경
	gold_key[randKey].k_state = 1 // state 변경

	if (gold_key[randKey].k_type == 1) {
		// 1이면 바로 실행될 메소드로 이동
	} else if (gold_key[randKey].k_type == 2) {
		
	}

	console.log('황금열쇠 토스트 시작');
	toast('<h3 class="toast_title">' + gold_key[randKey].k_name + '카드 획득<br>' + gold_key[randKey].k_comment + '</h3><img width="500px;" src="/mamin/img/game/toast/황금열쇠토스트.png">');
	console.log('황금열쇠 토스트 끝');
	object = {  // k_state 변경
		function_name: 'goldKeyUpdate',
		k_index: randKey,
		playerNo: playerNo,
	}
	send(object)

	useGoldkey(playerNo, randKey)
	// 황금열쇠 k_state , owner소켓 전달
	end_turn()
}

/////////// 수현 11/08 황금열쇠 사용 메소드 ////////////////
// 정기종합소득세 / 방범비 / 통행권/  뒤로 이동/ 고속도로/ 복권담청 / 생일축하 / 해외유학 / 기지강탈 /무인도 탈출권
function useGoldkey(playerNo, randKey) { // randKey 황금열쇠 인덱스
	let object = null;

	goldKeyWage(playerNo)
/*
	switch(randKey){
		case 0 : case 10 :
			console.log("정기종합소득세")
			goldKeyTax(playerNo , 40000)
			object = {
				object_name: 'player',
				index: playerNo,
				cash: player[playerNo].p_money
			}
			send(object)
			break;
		case 1 : case 11 : 
			console.log("방범비")
			goldKeyTax(playerNo, 20000)
			object = {
				object_name: 'player',
				index: playerNo,
				cash: player[playerNo].p_money
			}
			send(object)
			break;
		//통행권은 tollfee에서 같이 확인!
		case 3 : case 13 : // 뒤로 2칸 이동
			console.log("뒤로 2칸 이동")
			player[playerNo].p_position-=2
			goldKeyMove(playerNo, player[playerNo].p_position) // 위치 소켓 업데이트 메소드
			break;
		case 4 : case 14 : // 출발지로 이동
			console.log("출발지로 이동")
			goldKeyWage(playerNo)
			break;
		case 5 : case 15 : 
			// 복권당첨
			console.log("복권당첨")
			income(playerNo, 200000)
			object={
				object_name: 'player',
				index: playerNo,
				cash: player[playerNo].p_money
			}
			send(object)
			break;
		case 6 : case 16 ://생일축하
			console.log("생일축하...")	
			goldKeyBirth()
			break;
		case 7 : case 17 :	// 해외유학 돈 차감
			console.log("해외유학...")
			if(checkMoney(playerNo,100000)){
				outcome(playerNo, 100000)
			}else{// 돈 부족하면 매각	
				log.innerHTML="현금이 부족합니다."
				setTimeout(()=>{printLandList(playerNo, fee, 2)},2000)
		
			}
			object={
				object_name: 'player',
				index: playerNo,
				cash: player[playerNo].p_money
			}
			send(object)
			break;
		case 8 : case 18 :
			console.log("기지강탈")
			goldKeySteal()
			break;
		case 9 : case 19 :
			console.log("무인도탈출권..")	
			// 소유만 할 수 있게
			gold_key[randKey].k_owner=playerNo;
			break;
		
	}
	*/
	// 플레이어 위치 업데이트 소켓
	// 플레이어 자산 업데이트 소켓
	// 플레이어 소유 토지 업데이트 소켓

}

/////////// 수현 11/10 황금열쇠 생일축하 메소드 ////////////////
function goldKeyBirth(){
	//모든 플레이어한테 받아와야돼 돈 없으면 그냥 패스
	let playerList = [] // 본인을 제외한 플레이어리스트
	for (let i = 0; i < player.length; i++) {
		if (player[i].p_no != player[playerNo].p_no) { // 본인이 아니고
			if(player[i].p_money>=100000){ // 십만원 이상이 있으면
				player[i].p_money-=100000;
				player[playerNo].p_money+=100000
				playerList.push(i)
			}
		}
	}
	
	if(playerList.length<1){log.innerHTML="안타깝지만 지금 다들 돈이 부족하네요 다음 기회에..."}
	
	for(let i=0; i<playerList.length; i++){
		let	object = {
			Info_update: 'player',
			giveIndex: player[playerList[i]].p_no-1, 
			takeIndex: playerNo,
			give: player[playerList[i]].p_money,	// 주는 사람 잔액
			take: player[playerNo].p_money // 받는 사람 잔액
	
		}
	send(object)
	}
	
}

/////////// 수현 11/10 황금열쇠 생일축하 소켓 ////////////////
function goldKeyBirthSocket(){
	
}
/////////// 수현 11/10 황금열쇠 통행료 면제권 메소드 ////////////////
function goldKeyremoveOwner(gold_key_index){ // 면제권 사용하면 주인없음으로 바꿔주기
	gold_key[gold_key_index].k_owner=0;
	gold_key[gold_key_index].k_state=0; 
	// state 변경할지 말지 안정했는데 state 0 아닌거 하나도 없으면 무한반복오류 생길까봐 일단 여기에라도 넣어놓음!
}




/////////// 수현 11/09 황금열쇠 출발지 메소드 ////////////////

async function goldKeyWage() {
	player[playerNo].p_position = 0 // 위치 출발지로 변경
	await goldKeyWageUpdate()
	await goldKeyWageUpdate2()
}

function goldKeyWageUpdate() {
	return new Promise(function(resolve, reject) {
		goldKeyMove(playerNo, player[playerNo].p_position) // 위치 소켓 업데이트 메소드
		resolve()
	})
}

function goldKeyWageUpdate2() {
	return new Promise(function(resolve, reject) {
		object = {
			function_name: 'get_wage',
			playerTurn: playerNo
		}
		send(object)
		resolve()
	})
}

/////////// 수현 11/08 황금열쇠 무인도 탈출권 메소드 ////////////////
function goldKeyEscape() {
	//그냥 무인도 들어갈때 확인해서 waiting 안늘려주면 되는건가
	/*	if(gold_key[9].k_owner==playerNo || gold_key[19].k_owner==playerNo){
			 goldKeyEscape()
		} */


}

/////////// 수현 11/08 황금열쇠 기지강탈 메소드 ////////////////
function goldKeySteal() {
	let rand = null;
	let playerList = []
	for (let i = 0; i < player.length; i++) {
		if (player[i].p_no != player[playerNo].p_no) {
			playerList.push(i)
		}
	}

	rand = Math.floor(Math.random() * (playerList.length - 1)) // 


	// playerList[rand] -> 이게 player에 인덱스
	// 
	let sadPlayer = playerList[rand]
	let html = player[sadPlayer].p_nick + "님이 소유한 땅 1개를 골라주세요"
	sadPlayerName = player[sadPlayer].p_nick // 땅 뺏긴 플레이어
	let landList = []
	for (let i = 0; i < nation.length; i++) {
		if (nation[i].owner == sadPlayer + 1) { landList.push(i) }

	}
	console.log(landList + " 뺏길 사람이 가지고 있는 땅")
	if (landList.length < 1) { log.innerHTM = "안타깝게도 상대방이 소유한 땅이 없습니다. 다음 기회에" ; return;}
	landList.forEach(l => {

		html += '<div onclick="goldKeyStealUse(' + nation[l].n_no + ',' + nation[l].owner + ')">' + nation[l].n_name + '</div>'
		console.log(sadPlayerName +"뺏긴사람")
	})
	log.innerHTML = html
	

}

//////// 황금열쇠에서 선택한 땅 매각 되고 소켓 전달까지 ////////
function goldKeyStealUse(n_no, sadPlayerName) {
	let nationName = nation[n_no].n_name
	let msg=player[playerNo].p_nick+'님이 '+player[sadPlayerName-1].p_nick+'님의 '+nationName+'땅을 무효화 시켰습니다.'
	nation[n_no].owner = 0;
	nation[n_no].n_level = 0;
	let object = {
		function_name: 'goldKeyStealUpdate',
		nation_index: n_no,
		message:msg
		
	}
	send(object)
}

/////// 수현 황금열쇠 토지강탈 상대방화면에 어떻게 보여주지
function goldKeyStealUpdate(nation_index, message) {
	nation[nation_index].owner = 0
	nation[nation_index].n_level = 0
	log.innerHTML = message
	setHouse(nation_index, 0, playerNo) // 건물 없애기
	change_color(0, nation_index)
	
}


/////////// 수현 11/08 황금열쇠 위치이동 메소드 ////////////////
function goldKeyMove(playerNo, position) {
	player[playerNo].p_position = position
	// 위치이동 소켓 통신
	let object = {
		function_name: 'updatePlayerPosition',
		playerNo: playerNo,
		n_no: player[playerNo].p_position
	}
	send(object)
}
/////////// 수현 11/08 황금열쇠 토지대비 지출 메소드 ////////////////
function goldKeyTax(playerNo, muitiple) {
	// 돈 지출해야하는 황금열쇠 메소드
	// 정기종합소득세, 방범비
	// 플레이어가 보유한 토지 개수 가져오기
	let haveList = [] // 보유한 토지 목록 계산하려고 배열
	for (let i = 0; i < nation.length; i++) {
		if (nation[i].owner == playerNo + 1) { haveList.push(i) }
	}
	fee = haveList.length * muitiple
	if (checkMoney(playerNo, fee)) {
		log.innerHTML = fee + "원 지불 완료됐습니다."
		outcome(playerNo, fee)
	} else {// 돈 부족하면 매각	
		log.innerHTML = "현금이 부족합니다."
		setTimeout(() => { printLandList(playerNo, fee, 2) }, 2000)
	}
}

/////////// 수현 11/08 황금열쇠 업데이트 소켓 전달 ////////////////
function goldKeyUpdate(k_index, playerNo) {
	gold_key[k_index].k_state = 1;
	gold_key[k_index].k_owner = playerNo


}

//////////// 수현 11/05 추가 //////////////
// 통행료 지불 후 자산 업데이트 소켓 전달!!!
function playerMoneyUpdate(playerNo, ownerindex) {
	let object = null
	//2. player 객체 소켓 전달
	object = {
		Info_update: 'player',
		giveIndex: playerNo,
		takeIndex: ownerindex,
		give: player[playerNo].p_money,	// 주는 사람 잔액
		take: player[ownerindex].p_money // 받는 사람 잔액

	}
	send(object)


}
function takeMoneyInfo(give_player, take_player, give, take) {
	player[give_player].p_money = give;
	player[take_player].p_money = take;
	gamePlayer() // 수현추가 - 플레이어 정보출력 갱신
}

/////////////////////////// 비아[11/04] ///////////////////////////
//nation(소유주) / player(현금) 소켓 전달 메소드
function sendNationPlayer(nationNo, playerNo, n_level) {

	let object = null

	//20221107 지웅 추가
	//매각인 경우도 적용되게 하기 위해 가장 위에 뒀음

	let pno;	// pno 기준을 모르겠는디.. 아래보고 따라 만들어봄
	if (playerNo == -1) {
		pno = 0;
	} else {
		pno = player[playerNo].p_no;
	}
	object = {
		function_name: 'change_color',
		param: pno,
		param2: nationNo
	}
	send(object);

	if (playerNo == -1) {
		//1105 수현 추가!! 매각시 owner를 0으로 바꿔줘야해서 다르게 설정함! 혹시 문제되면 말해주세여...
		object = {
			object_name: 'nation',
			index: nationNo,
			p_no: 0,
			n_level: n_level	// 수현 추가함!!!!!
		}
		send(object)
		return;
	}
	//1. nation 객체 소켓 전달
	object = {
		object_name: 'nation',
		index: nationNo,
		p_no: player[playerNo].p_no,
		n_level: n_level	// 수현 추가함!!!!!
	}
	send(object)
	//2. player 객체 소켓 전달
	object = {
		object_name: 'player',
		index: playerNo,
		cash: player[playerNo].p_money
	}
	send(object)
}

//nation 업데이트 메소드
function updateNationInfo(nation_index, p_no, n_level) {
	nation[nation_index].owner = p_no
	nation[nation_index].n_level = n_level // 11/5 수현 추가함!!!!!!
}

//player 현금 업데이트 메소드
function updatePlayerInfo(player_index, cash) {
	player[player_index].p_money = cash
	gamePlayer() // 플레이어 정보출력 갱신
}

//nation 건물 단계 업데이트 메소드 - 처음 토지 구매할 때 건물도 같이 구매할 경우
function updateNationLevel(nation_index, playerNo) {
	nation[nation_index].n_level = 1
	setHouse(nation_index, nation[nation_index].n_level, playerNo)	// 게임보드 주택 입력 함수
}

//비아 - 세계여행 메소드
function goWorldtravel() {
	click_status = 2	//세계여행 시작하므로 click_status 값 2로 변경
	log.innerHTML = '세계여행을 떠납시다! 이동하고 싶은 나라를 클릭하세요.'
}

//플레이어 위치 업데이트 메소드
function updatePlayerPosition(playerNo, n_no) {
	player[playerNo].p_position = n_no
	//플레이어 위치 다시 로드
	playerLocation()
	//세계여행 종료로 click_status 값 다시 1로 변경
	// 20221109 지웅 옮김 
	click_status = 1
}

//비아 - 올림픽에 도착하자마자 실행되는 메소드
function arriveOlympic(playerNo) {
	let html = ''
	//1. 플레이어가 가지고 있는 토지 목록 로그에 띄워주기
	for (let i = 0; i < nation.length; i++) {
		if (nation[i].owner == (playerNo + 1) && nation[i].n_no != olympic_n_no) {
			//2. 플레이어가 로그에 띄워진 토지 목록 중 하나를 선택하면 onclick으로 함수 실행
			html += '<div onclick="sendOlympic(' + nation[i].n_no + ')">' + nation[i].n_name + '</div>'
		}
	}
	if (html != '')
		log.innerHTML = html		//로그에 띄우기
	else {
		log.innerHTML = '<div>이런! 소유한 나라가 없습니다.</div>'
	}
}

//비아 - 올림픽 소켓 통신 메소드
function sendOlympic(n_no) {
	let object = {
		function_name: 'holdOlympic',
		n_no: n_no
	}
	send(object)
}

function holdOlympic(n_no) {
	olympic_n_no = n_no		//전역변수에 플레이어가 올림픽 개최지로 선택한 땅 번호를 대입
	log.innerHTML = '<div> ' + nation[n_no].n_name + '에 올림픽이 개최됩니다! </div>'
}

//비아 - 플레이어의 p_waiting 업데이트 메소드
function setP_waiting(playerNo, value) {
	console.log("지금 플레이어의 남은 턴) "+player[playerNo].p_waiting)
	player[playerNo].p_waiting = value
	console.log("지금 플레이어의 무인도 남은 턴) "+player[playerNo].p_waiting)
}

//비아 - 무인도 도착 시 소켓 통신 메소드
function sendDesertedIsland(playerNo) {
	let object = {
		function_name: 'setP_waiting',
		playerNo: playerNo,
		value: 2
	}
	send(object)
}

//비아 - 무인도 탈출 실패 시 소켓 통신 메소드
function sendFailEscapeDesertedIsland(playerNo) {
	let object = {
		function_name: 'setP_waiting',
		playerNo: playerNo,
		value: 1
	}
	send(object)
}

//비아 - 무인도 탈출 시 소켓 통신 메소드
function sendEscapeDesertedIsland(playerNo) {
	let object = {
		function_name: 'setP_waiting',
		playerNo: playerNo,
		value: 0
	}
	send(object)
}

function calculateRank() {
   let propertylist = [];
   for (let i = 0; i < player.length; i++) {
      let property = calculateMoney(i + 1)
      if(propertylist.indexOf(property)<0){
         propertylist.push(property);
      }
   }   
   //순자산 내림차순 정렬
   propertylist = propertylist.sort(function(a, b) { return b-a });
   console.log(propertylist)
   for (let i = 1; i <= player.length; i++) {
      document.querySelector('.g_cal_rank'+i).innerHTML = (propertylist.indexOf(calculateMoney(i))+1) + '등'
   }
}



/////////////////////////////////////////////////////////////////

// 20221107 지웅 추가
// 캐릭터 회전 효과 
// transition으로 고정 좌표로 이동하는 방식을 선택하면 토지div에 hover효과가 들어가도 캐릭터는 허공에 둥둥 떠있게됌
// 한칸씩 이동을 대체할 적절한 순간이동 애니매이션 고려 필요
function animateCharacter(i) {
	$("#player" + i).toggleClass("down");
}
// 20221107 지웅 추가 
// 토지 구매/매각 시 토지 색상 변경
function change_color(pNo, nNo) {
	let land = document.querySelector('.ncolor' + nNo);
	land.style.backgroundColor = playerColor[pNo];
}
// 20221107 지웅 추가
// 토스트 이벤트
let removeToast;
function toast(str) {
	const toast = document.getElementById("toast");
	toast.classList.contains("reveal") ?
		(clearTimeout(removeToast), removeToast = setTimeout(function() {
			document.getElementById("toast").classList.remove("reveal")
		}, 3000)) :
		removeToast = setTimeout(function() {
			document.getElementById("toast").classList.remove("reveal")
		}, 3000)
	toast.classList.add("reveal"),
		toast.innerHTML = str	
}

// 1110 지웅 추가. 월급용 토스트(유저 옆에 출력)
let removeWageToast;
function toast2(str) {
	const toastwage = document.getElementById("toastwage"+(playerTurn+1));	
	
	toastwage.classList.contains("reveal") ?
		(clearTimeout(removeWageToast), removeWageToast = setTimeout(function() {
			document.getElementById("toastwage"+(playerTurn+1)).classList.remove("reveal")
		}, 3000)) :
		removeWageToast = setTimeout(function() {
			document.getElementById("toastwage"+(playerTurn+1)).classList.remove("reveal")
		}, 3000)
	toastwage.classList.add("reveal"),
		toastwage.innerHTML = str	
}

function turn_change() {//11/08 지웅 추가
	diceControl = true;
}

function turn_off(){
	diceControl = false;
}

/////////////파산 판단 함수1108 장군/////////////////////
function isBankrupt(playerNo, fee) {
	if (calculateMoney(playerNo + 1) - fee <= 0) {//순자산이 fee보다 작으면
		alert("파산했습니다")

		let object = {
			function_name: "isBankrupt",
			data1: player[playerNo].m_no,
			data2: playerNo//1109 장군 추가

		}

		send(object);
	}

	end_turn();
}

function stopPlaying(m_no, playerNo) {// 1108 장군 파산한 플레이어 게임 진행 못하게  //11/10 장군 수정
	let bankruptM_no = m_no;
	player[playerNo].p_state=false;
	
	thisRanking.push(player[playerNo])//순위판단용 배열 에 push
	$.ajax({
		url: "/mamin/game/GameControll",
		type: "POST",
		data: {

			"bankruptM_no": bankruptM_no
		},
		success: function(re) {
			if (re == "true") {//파산한 플레이어가 자신이면
				document.querySelector(".diceBtn").style.display = "none";//주사위버튼 안보이게 하기
			} else {
				alert(player[playerNo].p_nick + "님이 파산했습니다. ")
			}
		}
	})
	
	
	gameover()
	
}


//게임종료(정상적) 판단 장군 
function gameover() {
	let count = 0;
	for(let i =0 ; i<player.length;i++){
		if(player[i].p_state){
			count++;
		}
		
	}
	if(count==1){
		alert("게임종료")
		thisRanking.push(player[playerTurn])
	}
	//소켓처리 필요
	//db처리 필요
}
//1108 장군 턴종료
function end_turn() {//턴종료 해야되는 부분에 넣어주세요
	console.log(playerTurn+1+"번 플레이어로부터 턴종료 실행")
	if (document.querySelector('.r_sno').innerHTML != playerNo + 1) {//11/10장군 추가
		return
	}
	
	let object = {
		function_name: 'turn_change'
	}

	send(object);

	//비아 추가 1109 - 실시간 순위 계산
	object = {
		function_name: 'calculateRank'
	}
	send(object);
}





