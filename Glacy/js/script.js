var call_btn = document.querySelector("#form-call")
var overlay = document.querySelector("#overlay")
var cont_form = document.querySelector("#contacts-form")
var close_form = document.querySelector("#close-form")
call_btn.addEventListener("click", function(e) {
	e.preventDefault();
	overlay.classList.toggle("modal-show");
	cont_form.classList.toggle("modal-show");
});
overlay.addEventListener("click", function(event) {
	overlay.classList.toggle("modal-show");
	cont_form.classList.toggle("modal-show");
});
close_form.addEventListener("click",function(close){
	overlay.classList.toggle("modal-show");
	cont_form.classList.toggle("modal-show");
});