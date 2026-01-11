// ==UserScript==
// @name         Redirect to Image from IMGPV
// @namespace    https://github.com/msthoshi/UserScript
// @version      2026-01-11T11:24:00
// @description  Redirect to Image from IMGPV
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Redirect_to_Image_from_IMGPV.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Redirect_to_Image_from_IMGPV.user.js
// @match        https://imgpv.com/*/*.html
// @icon         https://imgpv.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    var element;
    element = document.getElementById('modal-image');
    if (element){
        window.location.href = element.src;
    }
})();
