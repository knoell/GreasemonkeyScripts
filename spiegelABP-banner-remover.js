// ==UserScript==
// @name        Spiegel NoAdQuestion
// @namespace   www.spiegel.de
// @description spiegelABP-banner-remover
// @include     http://www.spiegel.de/*
// @version     1
// @grant       none
// ==/UserScript==


// remove extended 
setInterval(function(){  
  // Message
  var badSpiegel = document.querySelector('div[class*="sp_message_container"]');
	badSpiegel.remove();
  // Background
  var badSpiegel = document.querySelector('div[class*="sp_veil"]');
	badSpiegel.remove();
  // Body Scrollbar
  var badSpiegelBody = document.querySelector('body');
	if (badSpiegelBody) {
    	badSpiegelBody.setAttribute('style', '!important');
  }
  // Body Scrollbar
  var badSpiegelHtml = document.querySelector('html');
	if (badSpiegelHtml) {
   	badSpiegelHtml.setAttribute('style', '!important');
  }
    
}, 1000 ); // 2000 means every two seconds (in milliseconds)

// Alternative
//var badDivs = $("div.SpecificParentName div.SpecificChildName:contains('SpecificTextName')");
//badDivs.parent().remove();


// delete hoveritem
// note: 'ua-default' is renamed to 'ua-detected ua-ff' later on
var adWindow = document.getElementsByClassName('ua-default');  
if (adWindow) {
    adWindow[0].parentNode.removeChild(adWindow[0]);
}

// remove blurring
// note: normally not needed
var aBlurringDiv = document.getElementById('wrapper-content');
if (aBlurringDiv) {
    aBlurringDiv.setAttribute('style', 'filter:blur(0px) !important; opacity: 1 !important');
}
