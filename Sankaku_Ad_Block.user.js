// ==UserScript==
// @name         Sankaku Ad Block
// @namespace    http://tampermonkey.net/
// @version      2025-06-29
// @description  Sankaku Ad Block
// @author       Yuyushiki
// @match        https://chan.sankakucomplex.com/ja/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sankakucomplex.com
// @grant        none
// ==/UserScript==

(function() {
    var elements, element;
    element = document.querySelector("#news-ticker");
    if (element && element.style.display != 'none'){
        element = document.querySelector("#close-news-ticker-link");
        if (element) element.click();
    }
    elements = document.querySelectorAll("button.carousel-hide");
    for (element of elements){
        if (element.innerHTML.indexOf('X') > -1){
            element.click();
        }
    }
    element = document.querySelector("div.carousel.topbar-carousel");
    if (element) element.style.display = 'none';
    element = document.querySelector("#has-mail-notice");
    if (element) element.style.display = 'none';
    element = document.querySelector("div.carousel.ai-carousel");
    if (element) element.style.display = 'none';
    element = document.querySelector("div.carousel.companion-carousel");
    if (element) element.style.display = 'none';
    element = document.querySelector("div.carousel.news-carousel");
    if (element) element.style.display = 'none';
    element = document.querySelector("div.carousel.premium-carousel");
    if (element) element.style.display = 'none';
    elements = document.getElementsByTagName('a');
    for (element of elements){
        if (element.getAttribute('href').indexOf('get.sankaku.plus') > -1){
            if (element.parentNode.style.display != 'none') element.parentNode.style.display = 'none';
        }
    }
})();
