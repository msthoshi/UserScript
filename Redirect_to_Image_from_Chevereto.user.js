// ==UserScript==
// @name         Redirect to Image from Chevereto
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-07-25T14:36:00
// @description  Redirect to Image from Chevereto
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Redirect_to_Image_from_Chevereto.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Redirect_to_Image_from_Chevereto.user.js
// @match        https://picturexxx.space/image/*
// @match        https://pixxxar.com/image/*
// @icon         https://chevereto.com/app/themes/v3/img/favicon.png
// @grant        none
// ==/UserScript==

(function() {
    var strURL, element;
    strURL = '';
    element = document.querySelector('div#image-viewer > img');
    if (element){
        strURL = element.src;
    } else {
        element = document.querySelector('div#image-viewer-container > img');
        if (element){
            strURL = element.src;
        }
    }
    if (strURL) window.location.href = strURL.replace(/\.md\./,'.');
})();
