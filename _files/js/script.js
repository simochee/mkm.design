const d = new Date();

$(function() {
	function winH() {
		let winH = $(window).height();
		$('.windowHeight').height(winH);
	}
	$(window).on('resize load', function() {
		winH();
	});

	slideShow();
});

var slideShow = function() {
	let $ele = $('.bg-slide .slide-item');
	// Initialize
	$ele.eq(0).addClass('active');
	$ele.eq(1).addClass('next');
	let len = $ele.length;
	let slider = setInterval(function() {
		let $active = $('.bg-slide .active');
		let $next = $('.bg-slide .next');
		let idx = $active.index();
		$active.removeClass('active');
		$next.removeClass('next');
		if(idx == len - 1) {
			$ele.eq(0).addClass('active');
			$ele.eq(1).addClass('next');
		} else if(idx == len - 2) {
			$ele.eq(idx + 1).addClass('active');
			$ele.eq(0).addClass('next');
		} else {
			$ele.eq(idx + 1).addClass('active');
			$ele.eq(idx + 2).addClass('next');
		}
	}, 5000);
}

const zero = function(n, l = 2) {
	const num = ('0000000000' + n).slice(-l);
	return num;
}