<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="../css/mypage.css">

</head>
<body>
	<%@ include file="header.jsp"%>
	<div class="webbox">
		<form class="mypageform" action="/mamin/member/mypage" method="post">
			<table class="mypagetable">
				<tr>
					<td class="col1">비밀번호</td>
					<td class="col2"><input type="password" name="m_password"
						id="m_password" onkeyup="mevent1()"></td>
					<td rowspan="2" class="col3"></td>
				</tr>
				<tr>
					<td class="col1">비밀번호 확인</td>
					<td class="col2"><input type="password"
						id="m_password_confirm" onkeyup="mevent2()"></td>
				</tr>
				<tr>
					<td class="col1">닉네임</td>
					<td class="col2"><input type="text" name="m_nick"
						class="m_nick"></td>
				</tr>
				<tr>
					<td class="col1">캐릭터</td>
					<td class="col2">
						<div class="row">

							<span class="col-md-3"> <!-- 캐릭터 선택창 -->
								<div class="wrapper">
									<div class="hexwrap">
										<div class="hex">
											<div class="hex-inner">
												<div class="content" onclick="hexbtn(1)">
													<p class="hexbox">
													<div class="hex">
														<img src="../img/member/1.png">
													</div>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="hexwrap">
										<div class="hex">
											<div class="hex-inner">
												<div class="content" onclick="hexbtn(2)">
													<p class="hexbox">
													<div class="hex">
														<img src="../img/member/2.png">
													</div>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="hexwrap">
										<div class="hex">
											<div class="hex-inner">
												<div class="content" onclick="hexbtn(3)">
													<p class="hexbox">
													<div class="hex">
														<img src="../img/member/3.png">
													</div>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="hexwrap">
										<div class="hex">
											<div class="hex-inner">
												<div class="content" onclick="hexbtn(4)">
													<p class="hexbox">
													<div class="hex">
														<img src="../img/member/4.png">
													</div>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="hexwrap">
										<div class="hex">
											<div class="hex-inner">
												<div class="content" onclick="hexbtn(5)">
													<p class="hexbox">
													<div class="hex">
														<img src="../img/member/5.png">
													</div>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="hexwrap">
										<div class="hex">
											<div class="hex-inner">
												<div class="content" onclick="hexbtn(6)">
													<p class="hexbox">
													<div class="hex">
														<img src="../img/member/6.png">
													</div>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="hexwrap">
										<div class="hex">
											<div class="hex-inner">
												<div class="content" onclick="hexbtn(7)">
													<p class="hexbox">
													<div class="hex">
														<img src="../img/member/7.png">
													</div>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</span> <span class="col-md-9"> <!-- 캐릭터 이미지 --> <img src="../img/member/1.png" class="cimg"><br> <input class="characterbtn" type="hidden" id="character" name="character" value="1"> </span>
						</div>
					</td>
				</tr>
				<tr>
					<td class="col1">자기소개</td>
					<td class="col2"><input type="text" name="m_profile"
						class="m_profile"></td>
				</tr>
			</table>
			<div class="mypagebtnbox">
				<button type="reset">취소하기</button>
				<button type="button" onclick="formsubmit()">회원정보수정</button>
			</div>
		</form>
	</div>

	<%@ include file="footer.jsp" %> 
	<script type="text/javascript" src="../js/mypage.js"></script>

</body>
</html>