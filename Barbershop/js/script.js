var obj = document.getElementById("login-form");
var searchBtn = document.getElementById('login');
searchBtn.addEventListener("click", function(event) {
	event.preventDefault();
	obj.classList.toggle("show-hide");
}, false);
