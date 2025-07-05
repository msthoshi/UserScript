// ==UserScript==
// @name         pictureXXX Ad Close
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-07-05
// @description  pictureXXX Ad Close
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/pictureXXX_Ad_Close.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/pictureXXX_Ad_Close.user.js
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
