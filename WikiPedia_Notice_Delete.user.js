// ==UserScript==
// @name         WikiPedia Notice Delete
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-06-29
// @description  WikiPedia Notice Delete.
// @author       Yuyushiki
// @match        https://ja.wikipedia.org/wiki/*
// @icon         https://ja.wikipedia.org/static/favicon/wikipedia.ico
// @grant        none
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/WikiPedia_Notice_Delete.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/WikiPedia_Notice_Delete.user.js
// @supportURL   https://github.com/msthoshi/UserScript
// ==/UserScript==

(function() {
    function fe(){
        var element1, element2, blnEnter;
        element1 = document.querySelector('button.frb-icon-btn.frb-close.skin-invert');
        element2 = document.querySelector('button.frb-footer-button.frb-inline-close');
        blnEnter = false;
        if (element1) {
            element1.click();
            blnEnter = true;
        }
        if (element2) {
            element2.click();
            blnEnter = true;
        }
        if (!blnEnter) window.setTimeout(fe, 500);
        window.removeEventListener('load', fe, false);
    }
    window.addEventListener('load', fe, false);
})();
