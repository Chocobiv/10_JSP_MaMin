
//비아 - 1. col3 div 모두 가져오기
let col3 = document.querySelector(".col3")	//class가 col3이면 모두 호출 [배열 저장]

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

//비아 -  -------------- form 전송 --------------
function formsubmit(){
	//1. 아이디 ~ 주소 모두 유효성 검사 검토
	if(col3.innerHTML !== '비밀번호가 서로 같습니다.'){
		alert('비밀번호가 서로 다릅니다.')
		return false
	}else if(document.querySelector('.m_nick').innerHTML === '' || document.querySelector('.m_profile').innerHTML === ''){
		alert('입력이 안된 정보가 있습니다.')
		return false
	}
	
	//signupform이라는 class를 가지고 있는 tag 호출
	document.querySelector('.mypageform').submit()	//해당 form 전송 //폼객체.submit()
}
