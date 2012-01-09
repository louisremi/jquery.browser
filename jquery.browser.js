(function($) {

var ua = navigator.userAgent.toLowerCase(),
	match,
	// Useragent RegExp
	rchrome = /(chrome)[ \/]([\w.]+)/,
	rsafari = /(safari)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

match = rchrome.exec( ua ) ||
	rsafari.exec( ua ) ||
	ropera.exec( ua ) ||
	rmsie.exec( ua ) ||
	ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
	[];

if ( match[1] ) {
	$.browser = {version: match[2] || "0"};
	$.browser[ match[1] ] = true;
}

})( window.jQuery || window );