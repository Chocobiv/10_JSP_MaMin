<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<link rel="stylesheet" href="https://unpkg.com/destyle.css@1.0.5/destyle.css">
	<link rel="stylesheet" href="../css/signup.css">
	<!-- fontawesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
		
</head>
<body>
	<%@ include file="header.jsp" %>
	<div class="webbox">
		<form class="signupform" action="/mamin/member/signup" method="post">

			<table class="signuptable">
				<tr>
					<td class="col1">아이디 * </td>	<!-- name:form에서 사용, id:js에서 사용 -->
					<td class="col2"> <input type="text" name="id" id="id" onkeyup="mevent1()"> </td>
					<td class="col3">  </td>
				</tr>
				<tr>
					<td class="col1">비밀번호 * </td>
					<td class="col2"> <input name="pw" type="password" id="pw" onkeyup="mevent2()"> </td>
					<td rowspan="2" class="col3">  </td>
				</tr>
				<tr>
					<td class="col1">비밀번호 확인 * </td>
					<td class="col2"> <input name="pwconfirm" type="password" id="pwconfirm" onkeyup="mevent3()"> </td>
				</tr>
				<tr>
					<td class="col1">닉네임 * </td>
					<td class="col2"> <input name="m_nick" type="text" id="m_nick" onkeyup="mevent4()"> </td>
					<td class="col3">  </td>
				</tr>
				<tr>
					<td class="col1">이메일 * </td>
					<td class="col2"> <input name="email" type="text" id="email" onkeyup="mevent5()"> </td>
					<td class="col3">  </td>
				</tr>
				<tr>
					<td class="col1">자기소개 </td>
					<td class="col2"> <input name="profile" type="text" id="profile" onkeyup="mevent6()"> </td>
					<td class="col3">  </td>
				</tr>
				<tr>
					<td class="col1">캐릭터 선택 </td>
					<td class="col2">
						<img src="../img/member/1.png" class="cimg"><br>
						<input class="characterbtn" type="radio" name="character" value="1" checked="checked">곰
						<input class="characterbtn" type="radio" name="character" value="2">돼지
						<input class="characterbtn" type="radio" name="character" value="3">쥐
						<input class="characterbtn" type="radio" name="character" value="4">햄스터
						<input class="characterbtn" type="radio" name="character" value="5">토끼
						<input class="characterbtn" type="radio" name="character" value="6">다람쥐
						<input class="characterbtn" type="radio" name="character" value="아가양">아가양
					</td>
				</tr>
			</table>
			
			
			<h3 class="parttitle">이용약관</h3>
			
			<span class="confirmbox">
				<textarea readonly="readonly">제 1 장 총 칙

 

제 1 조 (목적)
이 약관은 { 마블의 민족 }(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.

 

제 2 조 (약관의 효력 및 변경)
① 이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.
② 사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.

 

제 3 조 (용어의 정의)
이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
① 회원 : 사이트와 서비스 이용계약을 체결하거나 이용자 아이디(ID)를 부여받은 개인 또는 단체를 말합니다.
② 신청자 : 회원가입을 신청하는 개인 또는 단체를 말합니다.
③ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 정하고 사이트가 승인하는 문자와 숫자의 조합을 말합니다.
④ 비밀번호 : 회원이 부여 받은 아이디(ID)와 일치된 회원임을 확인하고, 회원 자신의 비밀을 보호하기 위하여 회원이 정한 문자와 숫자의 조합을 말합니다.
⑤ 해지 : 사이트 또는 회원이 서비스 이용계약을 취소하는 것을 말합니다.

 

제 2 장 서비스 이용계약

 

제 4 조 (이용계약의 성립)
① 이용약관 하단의 동의 버튼을 누르면 이 약관에 동의하는 것으로 간주됩니다.
② 이용계약은 서비스 이용희망자의 이용약관 동의 후 이용 신청에 대하여 사이트가 승낙함으로써 성립합니다.

 

제 5 조 (이용신청)
① 신청자가 본 서비스를 이용하기 위해서는 사이트 소정의 가입신청 양식에서 요구하는 이용자 정보를 기록하여 제출해야 합니다.
② 가입신청 양식에 기재하는 모든 이용자 정보는 모두 실제 데이터인 것으로 간주됩니다. 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며, 서비스의 제한을 받을 수 있습니다.

 

제 6 조 (이용신청의 승낙)
① 사이트는 신청자에 대하여 제2항, 제3항의 경우를 예외로 하여 서비스 이용신청을 승낙합니다.
② 사이트는 다음에 해당하는 경우에 그 신청에 대한 승낙 제한사유가 해소될 때까지 승낙을 유보할 수 있습니다.
가. 서비스 관련 설비에 여유가 없는 경우
나. 기술상 지장이 있는 경우
다. 기타 사이트가 필요하다고 인정되는 경우
③ 사이트는 신청자가 다음에 해당하는 경우에는 승낙을 거부할 수 있습니다.
가. 다른 개인(사이트)의 명의를 사용하여 신청한 경우
나. 이용자 정보를 허위로 기재하여 신청한 경우
다. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우
라. 기타 사이트 소정의 이용신청요건을 충족하지 못하는 경우

 

제 7 조 (이용자정보의 변경)
회원은 이용 신청시에 기재했던 회원정보가 변경되었을 경우에는, 온라인으로 수정하여야 하며 변경하지 않음으로 인하여 발생되는 모든 문제의 책임은 회원에게 있습니다.

 

제 3 장 계약 당사자의 의무

 

제 8 조 (사이트의 의무)
① 사이트는 회원에게 각 호의 서비스를 제공합니다.
가. 신규서비스와 도메인 정보에 대한 뉴스레터 발송
나. 추가 도메인 등록시 개인정보 자동 입력
다. 도메인 등록, 관리를 위한 각종 부가서비스
② 사이트는 서비스 제공과 관련하여 취득한 회원의 개인정보를 회원의 동의없이 타인에게 누설, 공개 또는 배포할 수 없으며, 서비스관련 업무 이외의 상업적 목적으로 사용할 수 없습니다. 단, 다음 각 호의 1에 해당하는 경우는 예외입니다.
가. 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우
나. 범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우
다. 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우
③ 사이트는 이 약관에서 정한 바에 따라 지속적, 안정적으로 서비스를 제공할 의무가 있습니다.

 

제 9 조 (회원의 의무)
① 회원은 서비스 이용 시 다음 각 호의 행위를 하지 않아야 합니다.
가. 다른 회원의 ID를 부정하게 사용하는 행위
나. 서비스에서 얻은 정보를 사이트의 사전승낙 없이 회원의 이용 이외의 목적으로 복제하거나 이를 변경, 출판 및 방송 등에 사용하거나 타인에게 제공하는 행위
다. 사이트의 저작권, 타인의 저작권 등 기타 권리를 침해하는 행위
라. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위
마. 범죄와 결부된다고 객관적으로 판단되는 행위
바. 기타 관계법령에 위배되는 행위
② 회원은 관계법령, 이 약관에서 규정하는 사항, 서비스 이용 안내 및 주의 사항을 준수하여야 합니다.
③ 회원은 내용별로 사이트가 서비스 공지사항에 게시하거나 별도로 공지한 이용 제한 사항을 준수하여야 합니다.

 

제 4 장 서비스 제공 및 이용

 

제 10 조 (회원 아이디(ID)와 비밀번호 관리에 대한 회원의 의무)
① 아이디(ID)와 비밀번호에 대한 모든 관리는 회원에게 책임이 있습니다. 회원에게 부여된 아이디(ID)와 비밀번호의 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 전적인 책임은 회원에게 있습니다.
② 자신의 아이디(ID)가 부정하게 사용된 경우 또는 기타 보안 위반에 대하여, 회원은 반드시 사이트에 그 사실을 통보해야 합니다.

 

제 11 조 (서비스 제한 및 정지)
① 사이트는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신 사업자가 전기통신서비스를 중지하는 등 기타 불가항력적 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다.
② 사이트는 제1항의 규정에 의하여 서비스의 이용을 제한하거나 정지할 때에는 그 사유 및 제한기간 등을 지체없이 회원에게 알려야 합니다.

 

제5장 계약사항의 변경, 해지

 

제 12 조 (정보의 변경)
회원이 주소, 비밀번호 등 고객정보를 변경하고자 하는 경우에는 홈페이지의 회원정보 변경 서비스를 이용하여 변경할 수 있습니다.

 

제 13 조 (계약사항의 해지)
회원은 서비스 이용계약을 해지할 수 있으며, 해지할 경우에는 본인이 직접 서비스를 통하거나 전화 또는 온라인 등으로 사이트에 해지신청을 하여야 합니다. 사이트는 해지신청이 접수된 당일부터 해당 회원의 서비스 이용을 제한합니다. 사이트는 회원이 다음 각 항의 1에 해당하여 이용계약을 해지하고자 할 경우에는 해지조치 7일전까지 그 뜻을 이용고객에게 통지하여 소명할 기회를 주어야 합니다.
① 이용고객이 이용제한 규정을 위반하거나 그 이용제한 기간 내에 제한 사유를 해소하지 않는 경우
② 정보통신윤리위원회가 이용해지를 요구한 경우
③ 이용고객이 정당한 사유 없이 의견진술에 응하지 아니한 경우
④ 타인 명의로 신청을 하였거나 신청서 내용의 허위 기재 또는 허위서류를 첨부하여 이용계약을 체결한 경우
사이트는 상기 규정에 의하여 해지된 이용고객에 대해서는 별도로 정한 기간동안 가입을 제한할 수 있습니다.

 

제6장 손해배상

 

제 14 조 (면책조항)
① 사이트는 회원이 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나 서비스 자료에 대한 취사선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.
② 사이트는 회원의 귀책사유나 제3자의 고의로 인하여 서비스에 장애가 발생하거나 회원의 데이터가 훼손된 경우에 책임이 면제됩니다.
③ 사이트는 회원이 게시 또는 전송한 자료의 내용에 대해서는 책임이 면제됩니다.
④ 상표권이 있는 도메인의 경우, 이로 인해 발생할 수도 있는 손해나 배상에 대한 책임은 구매한 회원 당사자에게 있으며, 사이트는 이에 대한 일체의 책임을 지지 않습니다.

 

제 15 조 (관할법원)

 

서비스와 관련하여 사이트와 회원간에 분쟁이 발생할 경우 사이트의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.

 

[부칙]

 

(시행일) 이 약관은 2022년 10월부터 시행합니다.</textarea>
				<input type="checkbox" id="confirm1"> <span>[필수] 이용약관 동의</span>
				<textarea readonly="readonly"> 마블의 민족 ('http://localhost:8080/mamin/index.jsp'이하 '마블의 민족')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.

○ 이 개인정보처리방침은 2022년 10월 27부터 적용됩니다.


제1조(개인정보의 처리 목적)

 마블의 민족 ('http://localhost:8080/mamin/index.jsp'이하 '마블의 민족')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

1. 홈페이지 회원가입 및 관리

회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 목적으로 개인정보를 처리합니다.




제2조(개인정보의 처리 및 보유 기간)

①  마블의 민족 은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.



제3조(처리하는 개인정보의 항목)

①  마블의 민족 은(는) 다음의 개인정보 항목을 처리하고 있습니다.



제4조(개인정보의 제3자 제공에 관한 사항)

①  마블의 민족 은(는) 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

②  마블의 민족 은(는) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.



제5조(개인정보처리의 위탁에 관한 사항)

①  마블의 민족 은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.

②  마블의 민족 은(는) 위탁계약 체결시 「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.

③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.



제6조(개인정보의 파기절차 및 파기방법)


①  마블의 민족  은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.

② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
1. 법령 근거 :
2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜

③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
1. 파기절차
 마블의 민족  은(는) 파기 사유가 발생한 개인정보를 선정하고,  마블의 민족  의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.

2. 파기방법

전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다



제7조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)



① 정보주체는 마블의 민족에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.

② 제1항에 따른 권리 행사는마블의 민족에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 마블의 민족은(는) 이에 대해 지체 없이 조치하겠습니다.

③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.

④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.

⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.

⑥ 마블의 민족은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.



제8조(개인정보의 안전성 확보조치에 관한 사항)

 마블의 민족 은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

1. 정기적인 자체 감사 실시
개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.

2. 개인정보에 대한 접근 제한
개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.

3. 비인가자에 대한 출입 통제
개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.




제9조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)



마블의 민족 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.


제10조(행태정보의 수집·이용·제공 및 거부 등에 관한 사항)



행태정보의 수집·이용·제공 및 거부등에 관한 사항

<개인정보처리자명>은(는) 온라인 맞춤형 광고 등을 위한 행태정보를 수집·이용·제공하지 않습니다.



제11조(추가적인 이용·제공 판단기준)

 마블의 민족  은(는) ｢개인정보 보호법｣ 제15조제3항 및 제17조제4항에 따라 ｢개인정보 보호법 시행령｣ 제14조의2에 따른 사항을 고려하여 정보주체의 동의 없이 개인정보를 추가적으로 이용·제공할 수 있습니다.
이에 따라  마블의 민족  가(이) 정보주체의 동의 없이 추가적인 이용·제공을 하기 위해서 다음과 같은 사항을 고려하였습니다.
▶ 개인정보를 추가적으로 이용·제공하려는 목적이 당초 수집 목적과 관련성이 있는지 여부

▶ 개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 추가적인 이용·제공에 대한 예측 가능성이 있는지 여부

▶ 개인정보의 추가적인 이용·제공이 정보주체의 이익을 부당하게 침해하는지 여부

▶ 가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부

※ 추가적인 이용·제공 시 고려사항에 대한 판단기준은 사업자/단체 스스로 자율적으로 판단하여 작성·공개함



제12조(가명정보를 처리하는 경우 가명정보 처리에 관한 사항)

 마블의 민족  은(는) 다음과 같은 목적으로 가명정보를 처리하고 있습니다.

▶ 가명정보의 처리 목적

- 직접작성 가능합니다.

▶ 가명정보의 처리 및 보유기간

- 직접작성 가능합니다.

▶ 가명정보의 제3자 제공에 관한 사항(해당되는 경우에만 작성)

- 직접작성 가능합니다.

▶ 가명정보 처리의 위탁에 관한 사항(해당되는 경우에만 작성)

- 직접작성 가능합니다.

▶ 가명처리하는 개인정보의 항목

- 직접작성 가능합니다.

▶ 법 제28조의4(가명정보에 대한 안전조치 의무 등)에 따른 가명정보의 안전성 확보조치에 관한 사항

- 직접작성 가능합니다.

제13조 (개인정보 보호책임자에 관한 사항)

① 마블의 민족 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

▶ 개인정보 보호책임자
성명 :마블의 민족
직책 :마블의 민족
직급 :마블의 민족
연락처 :010-1111-1111, abc@example.com,
※ 개인정보 보호 담당부서로 연결됩니다.


▶ 개인정보 보호 담당부서
부서명 :
담당자 :
연락처 :, ,
② 정보주체께서는 마블의 민족 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 마블의 민족 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.



제14조(국내대리인의 지정)

정보주체는 ｢개인정보 보호법｣ 제39조의11에 따라 지정된  마블의 민족 의 국내대리인에게 개인정보 관련 고충처리 등의 업무를 위하여 연락을 취할 수 있습니다.  마블의 민족 은(는) 정보주체의 개인정보 관련 고충처리 등 개인정보 보호책임자의 업무 등을 신속하게 처리할 수 있도록 노력하겠습니다.

▶  마블의 민족  은(는) ｢개인정보 보호법｣ 제39조의11에 따라 국내대리인을 지정하였습니다.

- 국내대리인의 성명 : [대리인 성명_직접입력] (법인의 경우 법인명, 대표자의 성명)

- 국내대리인의 주소 : [대리인 주소_직접입력] (법인의 경우 영업소 소재지)

- 국내대리인의 전화번호 : [대리인 전화번호_직접입력]

- 국내대리인의 전자우편 주소 : [대리인 전자우편_직접입력]

제15조(개인정보의 열람청구를 접수·처리하는 부서)
정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
 마블의 민족 은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.

▶ 개인정보 열람청구 접수·처리 부서
부서명 :
담당자 :
연락처 : , ,


제16조(정보주체의 권익침해에 대한 구제방법)



정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.

1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)

「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.

※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.

제17조(영상정보처리기기 운영·관리에 관한 사항)
①  마블의 민족 은(는) 아래와 같이 영상정보처리기기를 설치·운영하고 있습니다.

1.영상정보처리기기 설치근거·목적 :  마블의 민족 의

2.설치 대수, 설치 위치, 촬영 범위 :
설치대수 : 대
설치위치 :
촬영범위 :
3.관리책임자, 담당부서 및 영상정보에 대한 접근권한자 :

4.영상정보 촬영시간, 보관기간, 보관장소, 처리방법
촬영시간 : 시간
보관기간 : 촬영시부터
보관장소 및 처리방법 :
5.영상정보 확인 방법 및 장소 :

6.정보주체의 영상정보 열람 등 요구에 대한 조치 : 개인영상정보 열람.존재확인 청구서로 신청하여야 하며, 정보주체 자신이 촬영된 경우 또는 명백히 정보주체의 생명.신체.재산 이익을 위해 필요한 경우에 한해 열람을 허용함

7.영상정보 보호를 위한 기술적.관리적.물리적 조치 :



제18조(개인정보 처리방침 변경)


① 이 개인정보처리방침은 2022년 10월 27부터 적용됩니다.

② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.

예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)

예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)

예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)</textarea>
				<input type="checkbox" id="confirm2"> <span>[필수] 개인정보 수집 및 이용동의</span>
			</span>
			
			
			<div class="signupbtnbox">
				<button type="reset">취소하기</button>
				<button type="button" onclick="formsubmit()">회원가입</button>
			</div>
			
		</form>
	</div>
	
	
	
	<!-- JQuery -->
	<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
	
	<script type="text/javascript" src="../js/signup.js"></script>
</body>
</html>