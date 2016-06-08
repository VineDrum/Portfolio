$(".slider").append("<button type='button' class='slider-btn btn-backward'></button>");
$(".slider").append("<button type='button' class='slider-btn btn-forward'></button>");
// select buttons 
var backward = $(".btn-backward");
var forward = $(".btn-forward");

var close_map = $("#close-map");
var show_map = $("#map-button");
var map = $(".map-popup");
// first-slide
var current = $("#slide-1");

// slide-back
backward.click(function() {
	if (current.prev().hasClass("slider__item")) {
	current.hide("slow");
	current = current.prev();
	current.show("slow");
	}
});
//slide forward
forward.click(function() {
	if (current.next().hasClass("slider__item")) {
	current.hide("slow");
	current = current.next();
	current.show("slow");
	}
});
show_map.click(function(event) {
	event.preventDefault();
	map.show("slow");
});
close_map.click(function() {
	map.hide("fade");
});

// cart++
var cart_counter = 0;
var bookmark_counter = 0;
// cart pop up
var cart_add = $("#card-added");
var close_added = $("#close-added");
var cont = $("#cont-buy");
var cart_output = $("#basket-counter");
var bookmark = $(".bookmark");
var bookmark_output = $("#bookmarks-counter");
// get all btns with class buy
var buy_btn = $(".buy");
// 
buy_btn.click(function(event) {
	event.preventDefault();
	cart_counter += 1;
	cart_output.html("Корзина: " + cart_counter);
	cart_add.show();
});
close_added.click(function(event) {
	cart_add.hide();
});
cont.click(function(event) {
	cart_add.hide();
});
bookmark.click(function(event) {
	event.preventDefault();
	bookmark_counter += 1;
	bookmark_output.html("Закладки: " + bookmark_counter);
});