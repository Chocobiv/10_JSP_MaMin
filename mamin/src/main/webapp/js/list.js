
let pageinfo = {  // js 객체 선언 
 	listsize : 5 ,	// 게시물 표시 개수 
	page  : 1 ,		// 현재 페이지 번호 
	key : '',		// 검색 키 
	keyword : '',	// 검색 키워드
	type:1
}
getBoardList(1)//페이지 접속시 1번 실행

function islogin(){//로그인 확인 함수
	$.ajax({
		url:"/mamin/board/boardCRUD",
		type:"get",
		data:{"type":3},
		success:function(re){
			console.log(re)
			if(re=="null"){
				alert("로그인 후 이용해주세요")
				location.href="../view/login.jsp"
				
			}else{
				location.href="../view/write.jsp"
			}
			
		}
	})
	
	
}



function getBoardList(page){  //전체 게시물 출력 함수
	pageinfo.page = page;
	$.ajax({
		url:"/mamin/board/boardCRUD",
		data:  pageinfo,
		type:"get",
		success:function(re){
			let json = JSON.parse(re)
			
			let jsonlist = json.data
			let html=""
			for(let i = 0; i<jsonlist.length;i++){
				let b = jsonlist[i]
				html+=`<tr>
							<td>${b.b_no}</td>
							<td onclick="viewload(${b.b_no})">${b.b_title}</td>
							<td>${b.m_id}</td>
							<td>${b.b_date}</td>
							
					  </tr>`
					  	
			}
			
			document.querySelector(".btable").innerHTML=html
			
			let pagehtml = '';
				// 2. 이전 버튼  // 만일 현재페이지가 첫페이지이면 이전페이지 불가
				if( page <= 1 ) { pagehtml += '<button onclick="getBoardList( '+(page)+')">이전</button>'; }
				else { pagehtml += '<button onclick="getBoardList( '+(page-1)+')">이전</button>'; }
				// 4. 페이지번호 버튼 [ 시작버튼 ~ 마지막버튼 ]
				for( let page = json.startbtn ; page<= json.endbtn ; page++ ){
					pagehtml += '<button type="button" onclick="getBoardList('+page+')">'+page+'</button>'
				}
				// 3. 다음 버튼 // 만일 현재페이지가 마지막페이지이면 다음페이지 불가 
				if( page >= json.totalpage ){ pagehtml += '<button onclick="getBoardList( '+(page)+')">다음</button>'; }
				else{ pagehtml += '<button onclick="getBoardList( '+(page+1)+')">다음</button>'; }
			
			document.querySelector('.pagebox').innerHTML = pagehtml
			
			// 5. 전체vs검색 된 게시물수 표시 
			document.querySelector('.totalsize').innerHTML = json.totalsize
		}
		
		
	})
	
	
}

function viewload(b_no){ //세션에 게시글 번호 저장 함수
	$.ajax({
		url:"/mamin/board/viewload",
		type:"get",
		data:{"b_no":b_no},
		success:function(re){
			location.href = "../view/view.jsp"
			
		}
		
	})
	
	
}

// 4. 검색처리 함수 
function bsearch(){
	pageinfo.key = document.querySelector('.key').value
	pageinfo.keyword = document.querySelector('.keyword').value
	getBoardList( 1 )
}
// 6.게시물 표시 개수 
function blistsize(){
	pageinfo.listsize = document.querySelector('.listsize').value
	getBoardList( 1 )
}




