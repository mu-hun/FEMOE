if (!(/*@cc_on!@*/false || !!document.documentMode) && !!window.StyleMedia) {
    document.body.classList.toggle('.win');
}

(function () {
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
