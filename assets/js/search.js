function calcMenuWidth(resize) {

	var $menu = $('.js-submenu-dir');
	var $menuItem = $('.js-submenu-dir-category');
	var $viewMore = $('.js-submenu-dir-more');
	var $inputWhere = $('.js-submenu-input-where');
	var $menuList = $('.js-submenu-dir-list');

	var moreWidth = $viewMore.outerWidth(true);
	var inputWhereWidth = $inputWhere.outerWidth(true);
	var availableSpace = $menu.width() - moreWidth - inputWhereWidth;
	var navWidth = 0;

	$menuItem.each(function() {
		navWidth += $(this).outerWidth(true);
		if ((navWidth < availableSpace) && resize !== null) {
			$(this).removeClass('is__hidden');
			$($menuList).removeClass('list-overflow');
		} else {
			$(this).addClass('is__hidden');
			$($menuList).addClass('list-overflow');
		}
	});

	$($viewMore).addClass('is__hidden');

	if($menuList.hasClass('list-overflow')){
		$($viewMore).removeClass('is__hidden');
	}

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

$(window).on('resize', function(e) {
	calcMenuWidth(e);
});

calcMenuWidth();
