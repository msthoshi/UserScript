// ==UserScript==
// @name         E-Hentai Galleries
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-09-08T22:04:00
// @description  E-Hentai Galleries
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/E-Hentai_Galleries.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/E-Hentai_Galleries.user.js
// @match        https://e-hentai.org/
// @match        https://e-hentai.org/?f_*
// @match        https://e-hentai.org/g/*/*/
// @match        https://e-hentai.org/g/*/*/?p=*
// @match        https://e-hentai.org/s/*/*
// @icon         https://e-hentai.org/favicon.ico
// @grant        none
// ==/UserScript==

if ((/^https?:\/\/e-hentai\.org\/(?:\?f_.+)?$/).test(document.URL)){
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
} else if ((/^https?:\/\/e-hentai\.org\/g\/\d+\/[0-9a-f]+\/(?:\?p=\d+)?$/).test(document.URL)){
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
} else if ((/^https?:\/\/e-hentai\.org\/s\/[0-9a-f]+\/\d+-\d+$/).test(document.URL)){
    (function() {
        var strURL, arrMatch, strFileName;
        function PasteFileName(){
            navigator.clipboard.writeText(strFileName);
        }
        strURL = document.URL;
        arrMatch = strURL.replace(/\?[\s\S]+$/, '').match(/(\d+)-(\d+)$/);
        if (arrMatch){
            strFileName = arrMatch[1] + '-' + ('0000' + arrMatch[2]).slice(document.querySelector('#i2 > div.sn > div > span:nth-child(2)').innerHTML.length * -1);
            document.querySelector("#img").addEventListener('contextmenu', PasteFileName, false);
            document.querySelector("#i6").addEventListener('contextmenu', PasteFileName, false);
        }
    })();
}
