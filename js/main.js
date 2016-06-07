$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(150);

		$(this).addClass('active');
		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(150);
		});
	
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(150);
	}

	return false;
});

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.slideUp(150);
      $('.slct').removeClass('active');
  }
});

$('.hidden-filter').click(function(e) {
	e.preventDefault();
	var filter = $('#filter');
	if(filter.is(':visible')){
		filter.slideUp(350);
		$(this).text('Развернуть фильтр');
		$(this).closest('.filter').find('.reset-btn').hide();
		$(this).removeClass('active');
	}
	else{
		filter.slideDown(350);
		$(this).text('Скрыть фильтр');
		$(this).closest('.filter').find('.reset-btn').show();
		$(this).addClass('active');
	}
});

$('.more-text').click(function(e) {
	e.preventDefault();
	var heightBlock = $('.seo-tex-inner').innerHeight() + 50;
	$('.seo-text').animate({height: heightBlock + 'px'}, 400);
	$(this).closest('.more-text-block').hide();
});

$(function() {
	var menu = $('.mobile-nav'),
			menuWrapp = $('.mobile-nav-wrapp'),
			closeMenu = $('.close-menu'),
			menuBtn = $('.tablet-btn'),
			mobileBtn = $('.mobile-btn');

	menuBtn.click(function(e) {
		e.preventDefault();
		menu.fadeIn(500);
		menuWrapp.addClass('active');
	});

	closeMenu.click(function(e) {
		e.preventDefault();
		if (menu.is(':visible')) {
			menuWrapp.removeClass('active');
			menu.delay(300).fadeOut(500);
		}
	});

	mobileBtn.click(function(e) {
		e.preventDefault();
		if (menu.is(':hidden')) {
			menu.fadeIn(500);
			menuWrapp.addClass('active');
			$(this).addClass('active');
		}
		else{
			menuWrapp.removeClass('active');
			menu.delay(300).fadeOut(500);
			$(this).removeClass('active');
		}
	});	
});

$(function() {
	$('.catalog-toggle').click(function(e) {
		e.preventDefault();
		var catalog = $(this).next()
		if(catalog.is(':hidden')){
			catalog.slideDown(300)
		}
		else{
			catalog.slideUp(300)
		}
	});
});

$(function() {
	$('.catalog-drop-toogle').click(function(e) {
		e.preventDefault();
		var menu = $(this).next(),
        close = $('.close-menu'),
        heightBlock = $('.mobile-nav-wrapp').innerHeight();
    $('.catalog-drop-toogle + ul').css('height', heightBlock + 'px');
    if(menu.is(':hidden')){
    	close.addClass('open-catalog');
    	$('.catalog-drop-toogle + ul').fadeOut(250)
    	menu.fadeIn(400);
    	$('.mobile-nav').css('z-index', '10002');
	    if(window.matchMedia('(max-width: 767px)').matches){
				$('.close-catalog').fadeIn(400);
			}
    }
    else{
    	close.removeClass('open-catalog');
    	menu.fadeOut(400);
    	$('.mobile-nav').css('z-index', '10000');
    }
	});
	$('.close-catalog').click(function(e) {
		e.preventDefault();
		var catMenu = $('.catalog-drop-toogle + ul');
		catMenu.fadeOut(400);
		$(this).fadeOut(400);
		$('.mobile-nav').css('z-index', '10000');
	});
});	

$(function() {
	$(document).mouseup(function (e){ 
		var div = $(".mobile-nav-wrapp");
		if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass('active')) {
			div.removeClass('active');
			$('.mobile-nav').delay(300).fadeOut(500)
		}
	});
});

$(function() {
	$('.ques').click(function(e) {
		var div = $(this).next();
		if(div.is(':hidden')){
			div.fadeIn(300);
			div.addClass("active");
		}
		else{
			div.fadeOut(300);
			div.removeClass("active");
		}
		return false;
	});
});

$(function() {
	$(document).mouseup(function (e){ 
		var div = $(".tooltip");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.fadeOut(300);
			div.removeClass("active");
		}
	});
});

$(function() {
	 $(document).on('click', ".compare__right",function(){ 
	   var compare_carusel = $(this).parents('.compare__carousel');
	   compare_right_carusel(compare_carusel); 
	   return false;
	});

	$(document).on('click',".compare__left",function(){ 
	   var compare_carusel = $(this).parents('.compare__carousel');
	   compare_left_carusel(compare_carusel);
	   return false;
	});
	function compare_left_carusel(compare_carusel){
	   var block_width = $(compare_carusel).find('.noleft-border').outerWidth();
	   $(compare_carusel).children('.compare__wrapper').animate({scrollLeft: "-="+block_width+"px"}, 200); ; 
	   
	}
	function compare_right_carusel(compare_carusel){
	   var block_width = $(compare_carusel).find('.noleft-border').outerWidth();
	   $(compare_carusel).children('.compare__wrapper').animate({scrollLeft: "+="+block_width+"px"}, 200); 
	}

	$(function() {
	   $('.compare__carousel').each(function(){
	      $(this).find('.compare__items').html('<span style="display:inline-block;">'+$(this).find('.compare__items').html()+'</span>');
	      var cw = $(this).find('.compare__items').children('span').width();
	      $(this).find('.compare__items').width(cw);
	   })
 
	})
});

$(function() {
	$('.question__header').click(function(e) {
		e.preventDefault();
		var answer = $(this).next();
		if(answer.is(':hidden')){
			answer.slideDown(250)
			$(this).addClass('active')
		}
		else{
			answer.slideUp(250)
			$(this).removeClass('active')
		}
	});
});