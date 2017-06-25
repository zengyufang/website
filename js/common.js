// JavaScript Document
$(function(){
	/*content height*/
	var Height=$(window).height()-$(".headerWrap").height()-$(".footerWrap").height();
	$(".contentWrap").css("min-height",Height);
	$(window).resize(function(){
		var Height=$(window).height()-$(".headerWrap").height()-$(".footerWrap").height();
	$(".contentWrap").css("min-height",Height);
	})
})