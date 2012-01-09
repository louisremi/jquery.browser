(function($) {

var ua = navigator.userAgent.toLowerCase(),
	match,
	// Useragent RegExp
	rithing = /(ip\w+).*?os ([\w_]+)/,
	randroid = /(android)[ \/]([\w.]+)/,
	rblackberry = /(blackberry)(?:\d*?\/|.*?version\/)([\w.]+)/,
	rwp = /(windows phone)( os)? ([\w.]+)/,
	rsymbian = /(symbian)(?:os\/([\w.]+))?/;

match = rithing.exec( ua ) ||
	randroid.exec( ua ) ||
	rblackberry.exec( ua ) ||
	rwp.exec( ua ) ||
	rsymbian.exec( ua ) ||
	[];

if ( match[1] ) {
	$.platform = { version: match[2].split("_").join(".") || "0" };
	$.platform[ match[1].replace(" p", "P") ] = true;
}

})( window.jQuery || window );