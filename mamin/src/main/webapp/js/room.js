/**
 * 
 */




 
 // chatdisplay test용 function 
function enterKey(){
	if(window.event.keyCode == 13){
		sendMessage();
	}	
}
 
 function sendMessage(){
	document.querySelector('.chatDisplay').innerHTML += `<div>${document.querySelector('.c_inputbox').value}</div>`;
	document.querySelector('.c_inputbox').value = '';
	document.querySelector('.chatDisplay').scrollTop = document.querySelector('.chatDisplay').scrollHeight;	
}