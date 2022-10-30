

/* 썸머노트 실행 */

  	
  	
  
  
  



$.ajax({    //페이지 접속시 개별글 내용 출력 김장군
	url:"/mamin/board/boardCRUD",
	type:"get",
	data:{"type":2},
	success:function(re){
		let json = JSON.parse(re)
		document.querySelector(".b_title").value=json.b_title;
		document.querySelector(".b_content").innerHTML=json.b_content;
		if( json.b_file !== null ){ // 첨부파일 존재하면
				let filedelete = json.b_file+'<button type="button" onclick="b_filedelete()">삭제</button>'	// html 구성
				document.querySelector('.oldbfilebox').innerHTML = filedelete;	// 위에서 구성된 html 넣기
			}
		$(document).ready(function() {
  	
 			 $('#summernote').summernote({
			plasceholder : '내용 입력 해주세요' , 
			maxHeight : null , 
			minHeight : 300
			});
  
		}); 

		
	}
})


function b_filedelete(){ //기존파일 삭제 함수 김장군
	// 1. confirm[ 확인 = true / 취소=false ]
	if(  confirm('삭제 하시겠습니까?') ){ // 만약에 확인 버튼을 눌렀을때
		$.ajax({
			url : "/mamin/board/filedelete" ,
			success : function( re ){ 
				if( re === 'true'){
					alert('첨부파일 삭제')
					document.querySelector('.oldbfilebox').innerHTML ='' // 공백처리 
					$("#oldbfilebox").load( location.href+' #oldbfilebox');
					$(".class").load( location.href+' .class')
				}else{
					alert('첨부파일 삭제 실패')
				}
			}
		})
	}
}



function update(){
	
	let form = document.querySelector("#update")
	let formdata = new FormData(form)
		
	$.ajax({
		url:"/mamin/board/boardCRUD",
		data : formdata , 							
		type : 'put' , 
		contentType : false , 									
		processData : false , 
		success : function( re ){
			if(re==="true"){
				alert("글 수정 성공")
				location.href="list.jsp"
				
			}else{
				alert("글 수정 실패")
			}
		}
			
	})
	
	
}





