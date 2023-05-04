// Smooth Scroll to same page href without modifying pathname
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.attr('target', '_blank')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 0, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
		}
	});

$('#profile-picture').click(function () {
	window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

$('#codeblock-icon-email').click(function () {
	window.location.href = "mailto:contact@alikaratel.com.tr";
});

$('#codeblock-icon-github').click(function () {
	window.location.href = "https://github.com/alikaratel";
});

$('#codeblock-icon-linkedin').click(function () {
	window.location.href = "https://www.linkedin.com/in/alikaratel/";
});

$('#codeblock-icon-donate').click(function () {
	window.location.href = "https://alikaratel.com.tr/donate/";
});

$('#codeblock-icon-twitter').click(function () {
	window.location.href = "https://twitter.com/alikratel";
});

$('#codeblock-icon-instagram').click(function () {
	window.location.href = "https://www.instagram.com/alikratel";
});
