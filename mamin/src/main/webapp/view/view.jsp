
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
	<link rel="stylesheet" href="../css/view.css">
</head>
<body>
	<%@ include file="header.jsp" %>
	<div class="container webbox">
	
			 <div class="r1">
				번호:<div class="b_no"></div> 
			 </div> 
			 <div class="head">
				 <div class="b_title"></div> 
				 <div class="r2">
					 첨부파일 : <div class="b_file"></div> 
				 </div>
				<div class="r3">  
					작성자 : <div class="m_id"></div>  
					<span class="btnbox"></span>
				</div>
			</div>	
			<div class="b_content"></div> 
			 
		
	
		
		<div class="commentbox">
			<input type="text" class="c_content"><br>
			<button type="button" onclick="cwrite()">댓글작성</button>
		</div>
		<div class="commentlist">
				
		</div>
	</div>

	<script src="../js/view.js "type="text/javascript"></script>
</body>
</html>