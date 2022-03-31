function calcMenuWidth(resize) {
	var bodyWidth = $("body").width();

	if (bodyWidth > 1024) {
		var $menu = $('.js-submenu-dir');
		var $menuItem = $('.js-submenu-dir-category');
		var $viewMore = $('.js-submenu-dir-more');
		var $inputWhere = $('.js-submenu-input-where');

		var moreWidth = $viewMore.outerWidth(true);
		var inputWhereWidth = $inputWhere.outerWidth(true);
		var availableSpace = $menu.width() - moreWidth - inputWhereWidth;
		var navWidth = 0;

		$menuItem.each(function() {
			navWidth += $(this).outerWidth(true);
			
			if ((navWidth < availableSpace) && resize !== null) {
				$(this).removeClass('is__hidden');
			} else {
				$(this).addClass('is__hidden');
			}
		});

		$($viewMore).click(function(){
			$menuItem.each(function() {
				if( $(this).hasClass('is__hidden') ){
					$(this).removeClass('is__hidden');
				}else{
					$(this).addClass('is__hidden');
				}
			});
		});
		
	}
}

$(window).on('resize', function(e) {
	calcMenuWidth(e);
});

calcMenuWidth();
