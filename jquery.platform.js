(function($) {

var ua = navigator.userAgent.toLowerCase(),
	match,
	// Useragent RegExp
	rplatform = [
		/(ip\w+).*?os ([\w_]+)/,
		/(android)[ \/]([\w.]+)/,
		/(blackberry)(?:\d*?\/|.*?version\/)([\w.]+)/,
		/(windows phone)( os)? ([\w.]+)/,
		/(symbian)(?:os\/([\w.]+))?/
	],
	i = rplatform.length;

$.platform = {};
while ( i-- ) {
	if ( (match = rplatform[i].exec( ua )) && match[1] ) {
		$.platform[ match[1].replace(" p", "P") ] = true;
		$.platform.version = match[2].split("_").join(".") || "0";
		break;
	}
}

})( window.jQuery || window );