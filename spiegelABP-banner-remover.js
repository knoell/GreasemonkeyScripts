// ==UserScript==
// @name        Spiegel NoAdQuestion
// @namespace   www.spiegel.de
// @description spiegelABP-banner-remover
// @include     http://www.spiegel.de/*
// @version     1
// @grant       none
// ==/UserScript==


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
