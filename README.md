Browser and mobile platform sniffing scripts (plugin & standalone)

API
===

When loaded in the page after jQuery, results are available using:

    jQuery.browser.<name>
    jQuery.browser.version
    
    jQuery.platform.<name>
    jQuery.platform.version

When loaded in the page without jQuery or before jQuery, results are available using:

    browser.<name>
    browser.version
    
    platform.<name>
    platform.version

Tested browsers
---------------

The following browser &lt;name&gt;s are being searched for in the user-agent string:

    mozilla
    safari
    chrome
    msie
    opera

Tested mobile platforms
-----------------------

The following mobile platform &lt;name&gt;s are being searched for in the user-agent string:

    ipod
    iphone
    ipad
    android
    blackberry
    windowsPhone
    symbian

Precautions
===========

Browser and other user-agent sniffing is generally a bad practice in Web development. 
If you need to know which features are available in a users' browser,
you should use future proof [feature detection](https://developer.mozilla.org/en/Web_development/Writing_forward-compatible_websites#Sniff_for_specific_features) techniques or libraries (see [modernizr.js](http://www.modernizr.com/) or [jQuery.support](http://api.jquery.com/jQuery.support/) if you use jQuery).

There are still valid use cases for browser sniffing:

- as a fallback when features can't be detected or inferred (see [The Undetectables](https://github.com/Modernizr/Modernizr/wiki/Undetectables))
- to match the appearance of you webapp with a platform (beware, most OS's can be skinned)
- to offer links to specific browser extensions or mobile apps, according to the browser/platform

In any case, remember that user-agent strings can be spoofed.

License
=======

MIT licensed http://louisremi.mit-license.org/