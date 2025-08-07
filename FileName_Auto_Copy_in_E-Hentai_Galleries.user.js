// ==UserScript==
// @name         FileName Auto Copy in E-Hentai Galleries
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-08-07T18:13:00
// @description  FileName Auto Copy in E-Hentai Galleries
// @author       Yuyushki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/FileName_Auto_Copy_in_E-Hentai_Galleries.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/FileName_Auto_Copy_in_E-Hentai_Galleries.user.js
// @match        https://e-hentai.org/s/*/*
// @icon         https://e-hentai.org/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    var arrMatch, strGallerieID, intMaxLen, strNum, strFileName;
    function PasteFileName(){
        navigator.clipboard.writeText(strFileName);
        document.querySelector("#img").removeEventListener('contextmenu', PasteFileName, false);
        document.querySelector("#i6").removeEventListener('contextmenu', PasteFileName, false);
    }
    arrMatch = document.URL.match(/(\d+)-\d+$/);
    strGallerieID = (arrMatch) ? arrMatch[1] : '';
    intMaxLen = document.querySelector('#i2 > div.sn > div > span:nth-child(2)').innerHTML.length;
    arrMatch = document.URL.match(/\d+$/);
    strNum = (arrMatch) ? arrMatch[0] : '';
    if (strGallerieID && strNum){
        strFileName = strGallerieID + '-' + ('0000' + strNum).slice(intMaxLen * -1);
        document.querySelector("#img").addEventListener('contextmenu', PasteFileName, false);
        document.querySelector("#i6").addEventListener('contextmenu', PasteFileName, false);
    }
})();
