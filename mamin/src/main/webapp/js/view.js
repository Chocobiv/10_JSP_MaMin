


$.ajax({    //페이지 접속시 개별글 내용 출력 김장군
	url:"/mamin/board/boardCRUD",
	type:"get",
	data:{"type":2},
	success:function(re){
		let json = JSON.parse(re)
		console.log(json)
		document.querySelector('.b_no').innerHTML = json.b_no;
		document.querySelector('.b_title').innerHTML = json.b_title;
		document.querySelector('.b_content').innerHTML = json.b_content;
		document.querySelector('.m_id').innerHTML = json.m_id;
		if( json.b_file !== null ){	// null , undefined , 0 , false
				let filelink = '<a href="/mamin/board/filedown?b_file='+json.b_file+'">'+json.b_file+'</a>'
				// ' ' : 전체 문자열 처리
				// " " : 전체 문자열내 문자열 구분  
				document.querySelector('.b_file').innerHTML = filelink;
			}
		if(json.btnaction){//세션 아이디와 게시글 아이디가 일치하면
		////삭제,수정 버튼 활성화
			document.querySelector(".btnbox").innerHTML=`<button onclick="boardDelete(${json.b_no})">삭제</button><button><a href="../view/boardupdate.jsp">수정</a></button>`
		}
		clist()
	}
	
	
	
})

/////글 삭제 함수 김장군
function boardDelete(b_no){
	$.ajax({
		url:"/mamin/board/boardCRUD",
		type:"delete",
		data:{"b_no":b_no},
		success: function(re){
			
			if(re==="true"){   
				alert("삭제되었습니다")
				location.href="list.jsp"
			}else{alert("삭제실패")}
			
		}
		
	})
	
}


function cwrite(){//댓글 작성 김장군
	c_content=document.querySelector(".c_content").value
	$.ajax({
		
		url:"/mamin/board/commentwrite",
		type:"post",
		data: {
			"c_content":c_content,
			"type":1
		},
		success:function(re){
			if(re=="false"){
				alert("로그인 후 이용해주세요");
				location.href="../view/login.jsp"
			}
			clist()
			
		}
		
	})
	
}


function clist(){
	$.ajax({ // 댓글 호출 ajax
		url : "/mamin/board/commentwrite" ,
		data : { "type" : "comment" } , 	// type : reply    댓글용	
		success : function(re){ // 댓글 호출이 성공했을떄
			let commentlist = JSON.parse(re)
			let html = ''
			for( let i = 0 ; i<commentlist.length ; i++){ // 댓글마다 반복문 
				let comment = commentlist[i]
				console.log(comment.c_no)
				$.ajax({ // 댓글마다 대댓글 호출 ajax 호출  = rno ----> rindex 
					url : "/mamin/board/commentwrite" ,
					data : { "type" : "recomment" , "c_no" : comment.c_no } , // type : rereply    대댓글용// type : recomment    대댓글용
					async : false ,	/* 동기식 */ 
					success : function(re){ 
						let recommentlist = JSON.parse( re )
						/////// 상위 댓글 html 구성 
						html += '<div>'+
									'<span>'+comment.c_content+'</sapn>'+
									'<span>'+comment.c_date+'</sapn>'+
									'<span>'+comment.m_id+'</sapn>'+
									'<button type="button" onclick="recommentview('+comment.c_no+')">답글</button>'+
									'<div class="comment'+comment.c_no+'"></div>';	
						////// 대댓글 html 구성 
						for( let j = 0 ; j<recommentlist.length ; j++ ){
							let recomment = recommentlist[j]
							html += '<div style="margin : 20px;">'+
										'<span>'+recomment.c_content+'</sapn>'+
										'<span>'+recomment.c_date+'</sapn>'+
										'<span>'+recomment.m_id+'</sapn>'+
									'</div>';
						} // 대댓글 반복문
						// 마지막 닫기 html 구성
						html += '</div>';
					 }
				})
			} // 댓글 반복문 end 
			document.querySelector('.commentlist').innerHTML = html;
			
		}
	})
}




// 5. 대댓글[답글] 작성 구역 표시 함수
function recommentview( c_no ){
	let commentdiv = document.querySelector('.comment'+c_no)
	commentdiv.innerHTML = 
			'<input type="text" class="rcommentcontent'+c_no+'">'+
			'<button onclick="recommentwrite('+c_no+')">답글작성</button>';
}

// 6. 대댓글[답글] 작성 함수 
function recommentwrite( c_no ){
	let c_content = document.querySelector('.recommentcontent'+c_no).value
	$.ajax({
		url : "/mamin/board/commentwrite" ,
		data : {"c_content" :  c_content , "c_no" : c_no , "type" : "recomment" } , 
		type : "POST" , 
		success : function( re ){ 
			if(re=="false"){
				alert("로그인 후 이용해주세요");
				location.href="../view/login.jsp"
			}
			clist()
		 }
	});
}






















