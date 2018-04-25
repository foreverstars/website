// 轮播

var mySwiper = new Swiper('.swiper-container', {
	autoplay: true, // 可选项，自动滑动
	loop: true, // 循环
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}, // 分页器
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	} // 导航
})

/// onscroll
window.onscroll= function () {
	if (document.documentElement.scrollTop > 200) {
		$('.gotop').show()
	} else {
		$('.gotop').hide()
	}
}

$('.gotop').click(function(){
	document.documentElement.scrollTop = 0
})