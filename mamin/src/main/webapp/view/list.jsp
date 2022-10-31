<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@ include file="header.jsp" %>
	<button type="button" onclick="islogin()">글쓰기</button>
	
		<!--  게시물수 -->
		<div>게시물수 : <span class="totalsize"></span></div>
		
		<!-- 화면에 표시할 게시물 수 -->
	<div>
		<select class="listsize" onchange="blistsize()">
			<option value="5"> 5 </option>
			<option value="10"> 10 </option>
			<option value="15"> 15 </option>
			<option value="20"> 20 </option>
		</select>
	</div>

	<table class="btable table"> <!--  1. 게시물 표시 구역 -->
		<tr>
			<th> 번호 </th> <th> 제목 </th> <!--  2. 제목클릭시 상세페이지 -->
			<th>작성자</th><th> 작성일 </th> 
		</tr>
	</table>
		
	<div class="pagebox">	<!-- 3.페이징처리  -->
		
	</div>
	
	<div> <!-- 4. 검색처리 구역 -->
			<select class="key">
				<option value="b.b_title">제목</option>
				<option value="b.b_content">내용</option>
				<option value="m.m_id">작성자</option>
			</select>
			<input class="keyword" type="text" placeholder="검색어">
			<button type="button" onclick="bsearch()">검색</button>
	</div>
	
	
	
	
	
	
	<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="../js/list.js" type="text/javascript"></script>
</body>
</html>