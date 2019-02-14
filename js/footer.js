$(document).ready(footerChecker());

function footerChecker() {
	if (window.innerWidth < 390) {
		$('.mobile-block').show();
		$('.web-block').hide();
	}
	else if (window.innerWidth < 768) {
		$('.mobile-block').show();
		$('.web-block').hide();
	} else {
		$('.web-block').show();
		$('.mobile-block').hide();
	}
}

setInterval(footerChecker, 1000);