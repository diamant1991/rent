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
		$(this).text('Развернуть фильтр')
	}
	else{
		filter.slideDown(350);
		$(this).text('Скрыть фильтр')
	}
});