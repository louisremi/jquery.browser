(function($) {

var ua = navigator.userAgent.toLowerCase(),
	match,
	// Useragent RegExp
	rbrowsers = [
		/(chrome)[ \/]([\w.]+)/,
		/(safari)[ \/]([\w.]+)/,
		/(opera)(?:.*version)?[ \/]([\w.]+)/,
		/(msie) ([\w.]+)/,
		/(mozilla)(?:.*? rv:([\w.]+))?/
	],
	i = rbrowsers.length;

$.browser = {};
while ( i-- ) {
	if ( (match = rbrowsers[i].exec( ua )) && match[1] ) {
		$.browser[ match[1] ] = true;
		$.browser.version = match[2] || "0";
		break;
	}
}

})( window.jQuery || window );