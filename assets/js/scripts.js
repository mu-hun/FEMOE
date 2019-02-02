if (!(/*@cc_on!@*/false || !!document.documentMode) && !!window.StyleMedia) {
    document.body.classList.toggle('.win');
}

(function () {
	// partials mobile.html - bottom app bar
	const bottom_app_bar = document.querySelector('.bottom-app-bar')
	const bottom_app_bar_menu = document.querySelector('.mdil-menu')
	const bottom_app_drawer = document.querySelector('.bottom-app-drawer')
	const bottom_app_bar_fab = document.querySelector('.bottom-app-bar__fab')

	let preScroll = window.pageYOffset;
	let currentScroll = null;
	window.onscroll = function() {
		currentScroll = window.pageYOffset;
		if (preScroll > currentScroll) {
			bottom_app_bar.style.bottom = "0";
		} else {
			bottom_app_bar.style.bottom = "-84px";
		}
		if (document.querySelector('.is-shadow')) {
			bottom_app_bar_menu.click()
		}
		preScroll = currentScroll;
	}

	bottom_app_bar_menu.addEventListener('click', function() {
		bottom_app_drawer.classList.toggle('is-hidden');
		document.querySelector('main').classList.toggle('is-shadow');
	});

	// TODO: Add scroll down event to 
	/*if (document.querySelector('.is-shadow')) {
		document.querySelector('main').addEventListener('touchestart', function() {
			bottom_app_bar_menu.click()
		})
	}*/
	bottom_app_bar_fab.addEventListener('click', function scrollToTop() {
		window.scrollBy(0, -50);
		if (document.documentElement.scrollTop > 0) {
			setInterval(scrollToTop(), 10);
		}
	})


	// Do not run below code at localhost

    if (window.location.hostname == "localhost")
         return;

	// Google Analytics
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', '{{ .Site.googleAnalytics }}');
	
	// Disqus
	var disqus_loaded = false;

    var e = document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
    e.src = "//" + '{{ .Site.DisqusShortname }}' + ".disqus.com/embed.js";
    document.getElementsByTagName("body")[0]
    .appendChild(e);
})();
