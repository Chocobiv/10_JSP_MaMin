<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<form id="write">
		제목: <input type="text" name="b_title"><br>
		<textarea id="summernote" name="b_content"></textarea><br>
		첨부파일 : <input type="file" name ="b_file"> <br>
		<button type="button" onclick="bwrite()">등록</button>
	</form>
	
	
	
	
	<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="../js/write.js" type="text/javascript"></script>
</body>
</html>