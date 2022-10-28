

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
//시작점, 무인도, 올림픽, 세계여행, 황금열쇠4칸

gameboard()
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
											'<div class="color-bar light-blue">'+nation[i].n_name+'</div>'+
											'<div class="name">'+nation[i].n_payment+'</div>'+
											'<div class="price">'+nation[i].n_name+'</div>'+
									'</div>'
		
	}

	
}