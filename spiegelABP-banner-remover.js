// ==UserScript==
// @name        Spiegel NoAdQuestion
// @namespace   www.spiegel.de
// @description spiegelABP-banner-remover
// @include     http://www.spiegel.de/*
// @version     1
// @grant       none
// ==/UserScript==


// delete hoveritem
var adWindow = document.getElementsByClassName('ua-detected ua-ff');
if (adWindow) {
    //adWindow[0].setAttribute('style', ' !important');
    adWindow[0].parentNode.removeChild(adWindow[0]);
}

// remove blurring
var aBlurringDiv = document.getElementById('wrapper-content');
if (aBlurringDiv) {
    aBlurringDiv.setAttribute('style', 'filter:blur(0px) !important; opacity: 1 !important');
}
