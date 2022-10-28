/**
 * 
 */
$.ajax({    //페이지 접속시 개별글 내용 출력 김장군
	url:"/mamin/board/boardCRUD",
	type:"get",
	data:{"type":2},
	success:function(re){
		let json = JSON.parse(re)
		document.querySelector('.b_no').innerHTML = json.b_no;
		document.querySelector('.b_title').innerHTML = json.b_title;
		document.querySelector('.b_content').innerHTML = json.b_content;
		document.querySelector('.m_id').innerHTML = json.m_id;
		
	}
	
	
	
})