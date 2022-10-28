<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="../css/room.css" rel = "stylesheet">

</head>
<body>
	<%@ include file="header.jsp" %> <!-- file="jsp파일 주소" -->
	
	<div class="wrap">
		<div class="room_wrapper">
			<div class="room_info">
				<div> 부동산은 승리한다 </div>
			 </div>
			<table class="slot_box">
				<tr class="player_slot">
					<td class="r_p_img">
						<img src="/mamin/img/member/아가양.jpg">
					</td>
					<td class="r_name_box">두두지</td>
					<td class="r_winrate">승률 97%</td>
					<td class="r_ready_box">Ready</td>
				</tr>
				<tr class="player_slot">
					<td class="r_p_img">
						<img src="/mamin/img/member/아가양.jpg">
					</td>
					<td class="r_name_box">두두지</td>
					<td class="r_winrate">승률 97%</td>
					<td class="r_ready_box">Ready</td>
				</tr>
				<tr class="player_slot">
					<td class="r_p_img">
						<img src="/mamin/img/member/아가양.jpg">
					</td>
					<td class="r_name_box">두두지</td>
					<td class="r_winrate">승률 97%</td>
					<td class="r_ready_box">Ready</td>
				</tr>
				<tr class="player_slot">
					<td class="r_p_img">
						<img src="/mamin/img/member/아가양.jpg">
					</td>
					<td class="r_name_box">두두지</td>
					<td class="r_winrate">승률 97%</td>
					<td class="r_ready_box">Ready</td>
				</tr>
			</table>
			<div class="container"> <!-- 부트스트랩 css에서 미리 만들어진 class 사용 -->
				<div class="col-sm-6 offset-3 chattingbox">
					<div class="row">
						<div class="col-sm-16"> <!-- 채팅창 -->
							<div class="contentbox my-3"></div>
						
							<textarea rows="" cols="" class="form-control msgbox" onkeyup="enterKey()"></textarea>
							<div class="row">
								<div class="col-sm-2">
									<button class="dropdown-toggle" type="button" id="emobutton" data-bs-toggle="dropdown">
										이모티콘
									</button>
									<ul style="width: 400px; height: 200px;" aria-labelledby="emobutton" class="dropdown-menu">
										<!-- 이모티콘 표시 구역 -->
									</ul>
								</div>
								<div class="col-sm-3 offset-7">
									<button class="form-control" type="button" onclick="send()">보내기</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>	
	
</body>
</html>