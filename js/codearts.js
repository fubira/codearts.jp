// codearts javascript
$(function initialSet(){

});

$(function animationIndex(){
	$(window).on("load", function(){
		$('header').animate({
			height:"60px"
		},300,'easeOutBack');

		setTimeout(function(){
			$('header #title').animate({
				left:"40px"
			},300,'easeOutBack');
		},100);

		setTimeout(function(){
			$('.top_word').animate({
				opacity:1,
				bottom:"150px"
			},500,'easeOutSine');
		},300);
	});
});