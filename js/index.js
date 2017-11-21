$(function(){
	var width =  $(".item").css('width');
	$(".item").css('height',width);
	// var line-height = $(".title_box").css('height');
	// $(".title_box").css('line-height',line-height)

})

window.onresize = function() {
    var width =  $(".item").css('width');
	$(".item").css('height',width);
}
