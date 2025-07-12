// ==UserScript==
// @name         Redirect to Image from Javbee
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-07-12T15:55:00
// @description  Redirect to Image from Javbee
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Redirect_to_Image_from_Javbee.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Redirect_to_Image_from_Javbee.user.js
// @match        https://3minx.com/upload/*
// @match        https://555fap.com/upload/*
// @match        https://ai18.pics/upload/*
// @match        https://anime-jav.com/upload/*
// @match        https://blackwidof.org/upload/*
// @match        https://chinese-pics.com/upload/*
// @match        https://cn-av.com/upload/*
// @match        https://cnpics.org/upload/*
// @match        https://cnxx.me/upload/*
// @match        https://cosplay-xxx.com/upload/*
// @match        https://cosplay18.pics/upload/*
// @match        https://fc2ppv.stream/upload/*
// @match        https://fikfok.net/upload/*
// @match        https://gofile.download/upload/*
// @match        https://hentai-sub.com/upload/*
// @match        https://hentai4f.com/upload/*
// @match        https://hentaicovid.com/upload/*
// @match        https://hentaicovid.org/upload/*
// @match        https://hentaixnx.com/upload/*
// @match        https://javball.com/upload/*
// @match        https://javbee.vip/upload/*
// @match        https://javsunday.com/upload/*
// @match        https://javtele.net/upload/*
// @match        https://kin8-jav.com/upload/*
// @match        https://kr-av.com/upload/*
// @match        https://pig69.com/upload/*
// @match        https://porn-pig.com/upload/*
// @match        https://sweetie-fox.com/upload/*
// @match        https://xcamcovid.com/upload/*
// @match        https://xxpics.org/upload/*
// @icon         https://javbee.vip/storage/155103/4784b13a68d7c09ad30c5f760d9b3c87.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var strURL, element;
    strURL = '';
    element = document.querySelector('div.fileviewer-file > img');
    if (element){
        strURL = element.src;
    }
    if (strURL) window.location.href = strURL;
})();
