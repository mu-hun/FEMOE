if (!(/*@cc_on!@*/false || !!document.documentMode) && !!window.StyleMedia) {
    document.body.classList.add('.win');
}

(function () {
    // Don't ever inject Disqus on localhost--it creates unwanted
    // discussions from 'localhost:1313' on your Disqus account...
    if (window.location.hostname == "localhost")
         return;

	var disqus_loaded = false;

	// TODO: comments show/hide button
    // var disqus_shortname = '{{ .Site.DisqusShortname }}';
    // var disqus_button = document.getElementById("show-comments");

    // disqus_button.style.display = "";
    // disqus_button.addEventListener("click", disqus, false);

    function disqus() {

          if (!disqus_loaded) {
                disqus_loaded = true;

                var e = document.createElement("script");
                e.type = "text/javascript";
                e.async = true;
                e.src = "//" + '{{ .Site.DisqusShortname }}' + ".disqus.com/embed.js";
                (document.getElementsByTagName("head")[0] ||
                      document.getElementsByTagName("body")[0])
                .appendChild(e);

                //Hide the button after opening
                document.getElementById("show-comments").style.display = "none";
          }
    }

    //Opens comments when linked to directly
    var hash = window.location.hash.substr(1);
    if (hash.length > 8) {
          if (hash.substring(0, 8) == "comment-") {
                disqus();
          }
    }

    //Remove this is you don't want to load comments for search engines
    if (/bot|google|baidu|bing|msn|duckduckgo|slurp|yandex/i.test(navigator.userAgent)) {
          disqus();
	}
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', '{{ .Site.googleAnalytics }}');
})();
