// ==UserScript==
// @name         Chevereto Redirect to Image
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-07-09
// @description  Chevereto Redirect to Image
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Chevereto_Redirect_to_Image.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Chevereto_Redirect_to_Image.user.js
// @match        https://picturexxx.space/*
// @icon         https://chevereto.com/app/themes/v3/img/favicon.png
// @grant        none
// ==/UserScript==

(function() {
    var element;
    element = document.querySelector('div#image-viewer > img');
    if (element){
        window.location.href = element.src.replace(/\.md\./,'.');
    } else {
        element = document.querySelector("div#image-viewer-container > img");
        window.location.href = element.src.replace(/\.md\./,'.');
    }
})();
