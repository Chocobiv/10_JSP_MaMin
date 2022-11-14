<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
   <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
   <link href="../css/write.css" rel="stylesheet">
</head>
<body>
   <div class="container">
      <%@ include file="header.jsp" %>
      <form id="write">
         제목: <input type="text" name="b_title" class="title"><br>
         <textarea id="summernote" name="b_content"></textarea><br>
         첨부파일 : <input type="file" name ="b_file"> <br>
         <button type="button" onclick="bwrite()" class="addbtn">등록</button>
      </form>
      
   </div>
   
   <%@ include file="footer.jsp" %> 
   <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
   <script src="../js/write.js" type="text/javascript"></script>
</body>
</html>