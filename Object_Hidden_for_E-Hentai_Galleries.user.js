// ==UserScript==
// @name         Object Hidden for E-Hentai Galleries
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-08-31T16:00:00
// @description  Object Hidden for E-Hentai Galleries
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Object_Hidden_for_E-Hentai_Galleries.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Object_Hidden_for_E-Hentai_Galleries.user.js
// @match        https://e-hentai.org/g/*/*/
// @match        https://e-hentai.org/g/*/*/?p=*
// @icon         https://e-hentai.org/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    var element, strH;
    element = document.querySelector('div.gm');
    strH = '20px';
    function ClickElement(){
        if (element.style.overflow == 'hidden'){
            element.style.height = 'auto';
            element.style.overflow = 'visible';
        } else {
            element.style.height = strH;
            element.style.overflow = 'hidden';
        }
    }
    element.style.height = strH;
    element.style.overflow = 'hidden';
    element.addEventListener('click', ClickElement, false);
})();
