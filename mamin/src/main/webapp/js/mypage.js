
//전역변수
let col3 = document.querySelector(".col3")


getmember()

//비아 - 회원정보 불러오기
function getmember(){
	$.ajax({
		url : "/mamin/member/mypage",
		success : function(re) {
			let member = JSON.parse(re)
			document.querySelector(".m_nick").value = member.m_nick
			document.querySelector(".m_profile").value = member.m_profile
			
			document.querySelector('.cimg').src = '../img/member/'+member.m_img

		}
	})
}

//비아 -  -------------- 비밀번호 --------------
function mevent1(){
	let mpassword = document.querySelector("#m_password").value
	let mpasswordj = /^[a-zA-Z0-9]{8,20}$/
	
	if( mpasswordj.test(mpassword) ){ 
		col3.innerHTML = '비밀번호가 서로 같습니다.'
		mevent2()		//맞춰놓고 위에 것만 수정해도 체크가 안되므로 한번 더 체크
	}
	else{ col3.innerHTML = " 영대소문자/숫자 조합 8~20글자" }
}

//비아 -  -------------- 비밀번호 확인 --------------
function mevent2(){
	let mpassword = document.querySelector("#m_password").value
	let mpasswordconfirm = document.querySelector("#m_password_confirm").value
	let mpasswordj = /^[a-zA-Z0-9]{8,20}$/
	
	if( !mpasswordj.test(mpasswordconfirm) ){ col3.innerHTML = '영대소문자/숫자 조합 8~20글자' }	//정규표현식이 다르면
	else if( mpasswordconfirm != mpassword ){ 
		console.log('mpassword: '+mpassword)
		console.log('mpasswordconfirm: '+mpasswordconfirm)
		
		col3.innerHTML = '비밀번호가 서로 다릅니다.' }	//두 비밀번호가 다르면
	else{ 		//정규표현식 맞고 두 비밀번호 맞으면
		col3.innerHTML = '비밀번호가 서로 같습니다.'
		mevent1()		//맞춰놓고 위에 것만 수정해도 체크가 안되므로 한번 더 체크
	}	
}

//비아 -  ----------- 캐릭터 선택 버튼 -----------
function hexbtn(image){
	let cimg = document.querySelector('.cimg')
	cimg.src = '../img/member/'+image+'.png'
	console.log("image:"+image)
	if(image!=null)
		document.querySelector('input[id=character]').value = image
}

//비아 -  -------------- form 전송 --------------
function formsubmit(){
	if(col3.innerHTML !== '비밀번호가 서로 같습니다.'){
		alert('비밀번호가 서로 다릅니다.')
		return false
	}else if(document.querySelector('.m_nick').value === '' || document.querySelector('.m_profile').value === ''){
		alert('입력이 안된 정보가 있습니다.')
		return false
	}
	
	document.querySelector('.mypageform').submit()	//해당 form 전송
}
