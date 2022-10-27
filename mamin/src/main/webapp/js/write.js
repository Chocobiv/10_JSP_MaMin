function bwrite(){///글등록 함수 김장군
	let form = document.querySelector("#write")
	let formdata = new FormData(form)
		
	$.ajax({
		url:"http://localhost:8080/mamin/board/boardCRUD",
		data : formdata , 							
		type : 'POST' , 
		contentType : false , 									
		processData : false , 
		success : function( re ){
			if(re==="true"){
				alert("글 등록 성공")
				
			}else{
				alert("글등록 실패")
			}
		}
			
	})

	
}