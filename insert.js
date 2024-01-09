(function() {
if (document.getElementById('telegraph-dark'))
	return 'reload!';

let s = document.createElement('script');
s.id = 'telegraph-dark';
s.src = browser.runtime.getURL("slider.js");
(document.head || document.documentElement).appendChild(s);
})();