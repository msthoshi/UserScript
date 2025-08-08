// ==UserScript==
// @name         PopUp Canceler for E-Hentai Galleries
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-08-08T10:48:00
// @description  PopUp Canceler for E-Hentai Galleries
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/PopUp_Canceler_for_E-Hentai_Galleries.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/PopUp_Canceler_for_E-Hentai_Galleries.user.js
// @match        https://e-hentai.org/
// @match        https://e-hentai.org/?f_*
// @icon         https://e-hentai.org/favicon.ico
// @grant        none
// ==/UserScript==

popUp = function (URL, w, h){
    var arrMatch, element;
    arrMatch = URL.match(/gid=(\d+)&t=/);
    if (arrMatch){
        element = document.getElementById('posted_' + arrMatch[1]);
        if (element){
            navigator.clipboard.writeText(element.innerHTML);
        }
    }
    return(false);
}
