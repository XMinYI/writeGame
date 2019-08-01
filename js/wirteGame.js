function xmy(content){
	
//			var btn = document.querySelector(selector);
			var body = document.querySelector('body');
			var head = document.querySelector('head');
			var alertDiv = null; 
			
//			btn.onclick = function(){
				var alertStyle = document.createElement('style');
				alertStyle.innerHTML=`
				*{
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				.alertContain{
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.alretstyle{
					width: 600px;
					height: 400px;
					background: #fff;
					display: flex;
					flex-direction: column;
					/*justify-content: center;*/
					align-items: center;
					border-radius: 15px;
					box-shadow: 0 10px 20px #333;
					overflow: hidden;
				}
				
				.alretstyle h1{
					height: 80px;
					line-height: 80px;
					width: 100%;
					padding:  0 30px;
					font-size: 30px;
					border-bottom: 1px solid #ccc;
					background: deepskyblue;
					color: #fff;
				}
				.alretstyle p{
					width: 100%;
					height: 240px;
					padding: 20px 30px;
					border-bottom: 1px solid #ccc;
				}
				.alretstyle button{
					width: 150px;
					margin-top: 15px;
					height: 50px;
					background: deepskyblue;
					color: #fff;
					border: none;
					border-radius: 15px;
				}
				`
				head.appendChild(alertStyle);
				
				alertDiv = document.createElement('div');
				alertDiv.className = 'alertContain';
				alertDiv.style.width = '100vw';
				alertDiv.style.height = '100vh';
				alertDiv.style.position ='fixed';
				alertDiv.style.top = '0';
				alertDiv.style.left = '0';
				alertDiv.style.background = 'rgba(0,0,0,0.6)';
//"<div class='alretstyle'><h1>温馨提示</h1><p>${centent}</p><button class='confirm'>确定</button></div>"
				alertDiv.innerHTML = `
				<div class='alretstyle'>
					<h1>温馨提示</h1>
					<p>${content}</p>
					<button class='confirm'>确定</button>
				</div>
				`
				body.appendChild(alertDiv);
				alertDiv.appendChild(alertStyle);
				
				var confirm = document.querySelector('.confirm');
				confirm.onclick = function(){
//					alertDiv.parentElement.removeChild(alertDiv)
				location.reload();
				}
//			}		
}
