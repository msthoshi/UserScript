// ==UserScript==
// @name         pictureXXX Ad Close
// @namespace    http://tampermonkey.net/
// @version      2025-06-29
// @description  pictureXXX Ad Close
// @author       Yuyushiki
// @match        https://picturexxx.space/*
// @icon         https://picturexxx.space/content/images/system/default/favicon.png
// @grant        none
// ==/UserScript==

(function() {
    function fe(){
        document.querySelector('div.▶__close').click();
        window.removeEventListener('load', fe, false);
    }
    window.addEventListener('load', fe, false);
})();
