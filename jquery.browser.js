(function($) {

var ua = navigator.userAgent.toLowerCase(),
	match,
	i = 0,
	// Useragent RegExp
	rbrowsers = [
		/(chrome)[ \/]([\w.]+)/,
		/(safari)[ \/]([\w.]+)/,
		/(opera)(?:.*version)?[ \/]([\w.]+)/,
		/(msie) ([\w.]+)/,
		/(mozilla)(?:.*? rv:([\w.]+))?/
	];

$.browser = {};
while ( i++ < rbrowsers.length ) {
	if ( (match = rbrowsers[i].exec( ua )) && match[1] ) {
		$.browser[ match[1] ] = true;
		$.browser.version = match[2] || "0";
		break;
	}
}

})( window.jQuery || window );