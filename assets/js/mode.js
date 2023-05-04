// Theme Settings & Toggles
// Note: Header script sets alikaratel-data-theme according to local storage
localStorage.getItem('alikaratel-data-theme') === 'light' ? light() : dark();

document.querySelector('#logo').addEventListener('click', function () {
	document.documentElement.getAttribute('alikaratel-data-theme') === 'light' ? dark() : light();
});

function light() {
	document.documentElement.setAttribute('alikaratel-data-theme', 'light');
	$('#code-website-theme').text('"masochist mode"');
	setTimeout(() => {
		$("#logo").attr("src", "/assets/img/light.svg");
	}, 100);
	localStorage.setItem('alikaratel-data-theme', 'light');
	changeFavicon('dark');
}

function dark() {
	document.documentElement.setAttribute('alikaratel-data-theme', 'dark');
	$('#code-website-theme').text('"midnight"');
	setTimeout(() => {
		$("#logo").attr("src", "/assets/img/dark.svg");
	}, 100);
	localStorage.setItem('alikaratel-data-theme', 'dark');
	changeFavicon('light');
}

function changeFavicon(mode) {
	document.querySelectorAll("link[type='image/png']").forEach(function (e) {
		e.href = 'assets/img/favicon/' + e.sizes.value + mode + '.png';
	});
}
