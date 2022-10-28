
getBoard()

function getBoard(){
	
	$.ajax({
		url:"http://localhost:8080/mamin/board/boardCRUD",
		data:{"type":1},
		type:"get",
		success:function(re){
			let json = JSON.parse(re)
			let html=""
			for(let i = 0; i<json.length;i++){
				let b = json[i]
				html+=`<tr>
							<td>${b.b_no}</td>
							<td onclick="viewload(${b.b_no})">${b.b_title}</td>
							<td>${b.b_date}</td>
							<td>${b.m_id}</td>
					  </tr>`		
			}
			document.querySelector(".btable").innerHTML+=html
		}
		
		
	})
	
	
}