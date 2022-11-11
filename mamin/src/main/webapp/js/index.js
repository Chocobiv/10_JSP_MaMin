
let m_id = document.querySelector('.H_idbox').innerHTML;

function enterRoom(){	
	if(m_id === 'null'){
		alert('로그인 후 이용해주세요.');
		location.href = '/mamin/view/login.jsp';
		return;
	}
	
	$.ajax({
		url : '/mamin/game/GameChecker',
		success : (result)=>{
			if(result=='false'){
				location.href = '/mamin/view/room.jsp';
			}else{
				alert('[입장 불가] 게임 진행중');
			}
		}		
	})
	
}
