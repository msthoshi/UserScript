// ==UserScript==
// @name         Gouki Imege
// @namespace    http://tampermonkey.net/
// @version      2025-06-29
// @description  Gouki Imege Arrange
// @author       yuyushiki
// @match        https://ip1.imgbbs.jp/read7/gouki/*
// @icon         https://ip1.imgbbs.jp/read7/gouki/imgup/title.jpg
// @grant        none
// @updateURL    https://github.com/msthoshi/UserScript/raw/master/Gouki_Imege.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/master/Gouki_Imege.user.js
// @supportURL   https://github.com/msthoshi/UserScript/
// ==/UserScript==

(function() {
    var counter, element, i, intImgLen, strSrc;
    document.querySelector("body > div").style.lineHeight = '2px';
    document.querySelector("body > div > img:nth-child(1)").style.zoom = '10%';
    counter = document.querySelector("body > div > div");
    counter.style.height = '40px';
    counter.style.overflow = 'auto';
    counter.style.zoom = '66%';
    counter.style.lineHeight = '1em';
    element = document.getElementsByTagName('img');
    intImgLen = element.length;
    for (i=0; i<intImgLen; i++){
        strSrc = element[i].src;
        if (strSrc.indexOf('/img/s') > 0){
            element[i].style.maxWidth = '300px';
            element[i].style.maxHeight = '300px';
            element[i].src = strSrc.replace(/\/img\/s/, '/img/');
        }
    }
})();
