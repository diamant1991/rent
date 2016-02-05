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