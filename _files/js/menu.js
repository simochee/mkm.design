$(function() {
	const $tree = $('#menuTree');
	const treeTop = $tree.offset().top;
	$(window).on('scroll', function() {
		const winTop = $(this).scrollTop();
		if(winTop + 90 >= treeTop) {
			$tree.addClass('track');
		} else {
			$tree.removeClass('track');
		}
	});
});