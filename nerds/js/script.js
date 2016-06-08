var overlay = $("#overlay");
var close_form = $("#close-form");
var write_form = $("#write-us");
var form_caller = $("#form-show");
form_caller.click(function () {
	overlay.show("fast");
	write_form.show("fast");
});
overlay.click(function (){
	overlay.hide("fast");
	write_form.hide("fast");
});
close_form.click(function (){
	overlay.hide("fast");
	write_form.hide("fast");
});