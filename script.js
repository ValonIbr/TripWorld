
		new Date()
			var a = new Date();  
		document.getElementById("date").innerHTML=a;
			

		let menu = document.querySelector('#menu-bar');
		let navbar = document.querySelector('.navbar');

		menu.onclick =() =>{
			menu.classList.toggle('fa-times');
			navbar.classList.toggle('active');
		}

	