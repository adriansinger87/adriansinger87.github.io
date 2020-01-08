				
// Start Open Web Analytics Tracker

var owa_baseUrl = 'https://analytics.adrian-singer.de/';
var owa_cmds = owa_cmds || [];
owa_cmds.push(['setSiteId', '24be8aff0d5864ddd8bc4ca880f7e972']);
owa_cmds.push(['trackPageView']);
owa_cmds.push(['trackClicks']);

(function() {
	var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
	owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
	_owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
	var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
}());

// End Open Web Analytics Code