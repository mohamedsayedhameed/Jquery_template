/*global $, alert, console*/
$(function () {
	// adjust header height
    'use strict';
	$('.header').height($(window).height());
	$(window).on('resize', function () {
		$('.header').height($(window).height());
		
		$('.bxslider').each(function () {
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
		});

	});

	// fixed navbar
	$(window).on('scroll',function(){ 
		if($(window).scrollTop()){
			$('.navbar').addClass( "bounce" );
		}else{
			$('.navbar').removeClass( "bounce" );
		}
		console.log($(window).scrollTop());
	});
	
	// add class active
	$('.links li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	// adjust bx slider cent
	$('.bxslider').each(function () {
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
	});
	
	// trigger the bx slider
	$('.bxslider').bxSlider({
		pager : false
	});
	
	// smooth scroll
	$('.links li a').on('click', function () {
		$('html, body').animate({
			scrollTop : $('#' + $(this).data('value')).offset().top - 85
		}, 1000);
	});
	
	// our auto slider code
	(function autoSlider() {
		$('.slider .active').each(function () {
			if (!$(this).is(':last-child')) {
				$(this).delay(2000).fadeOut(1000, function () {
					$(this).removeClass('active').next().addClass('active').fadeIn();
					autoSlider();
				});
			} else {
				$(this).delay(2000).fadeOut(1000, function () {
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					autoSlider();
				});
            }
		});
	}());
	
	// trigger mix it up
	$(function(){
		$('.container').mixItUp();
	});
	
	// trigger nice scroll
	
	$('body').niceScroll();
	
});






















