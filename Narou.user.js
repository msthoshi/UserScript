// ==UserScript==
// @name         Narou JS
// @namespace    http://tampermonkey.net/
// @version      2025-07-05
// @description  Narou User JavaScript
// @author       Yuyushiki
// @match        https://ncode.syosetu.com/*/*/
// @icon         https://static.syosetu.com/view/images/narou.ico
// @grant        none
// ==/UserScript==

(function() {
    function fe(event){
        if (event.isTrusted){
            if (event.code == 'KeyN'){
                document.querySelector('a.c-pager__item.c-pager__item--next').click();
            } else if (event.code == 'KeyP'){
                document.querySelector('a.c-pager__item.c-pager__item--before').click();
            } else if (event.code == 'KeyL'){
                document.querySelector('a[class="c-pager__item"]').click();
            } else if (event.code == 'ArrowLeft'){
                event.preventDefault();
                document.querySelector('article.p-novel').scrollBy({top: 0, left: -parseFloat(window.getComputedStyle(document.querySelector('div[class="js-novel-text p-novel__text"]')).getPropertyValue('line-height'))*2, behavior: 'smooth'});
            } else if (event.code == 'ArrowRight'){
                event.preventDefault();
                document.querySelector('article.p-novel').scrollBy({top: 0, left: parseFloat(window.getComputedStyle(document.querySelector('div[class="js-novel-text p-novel__text"]')).getPropertyValue('line-height'))*2, behavior: 'smooth'});
            } else if (event.code == 'Space' && !event.shiftKey){
                event.preventDefault();
                document.querySelector('article.p-novel').scrollBy({top: 0, left: parseFloat(window.getComputedStyle(document.querySelector('div[class="js-novel-text p-novel__text"]')).getPropertyValue('line-height')) * 3 - document.documentElement.clientWidth, behavior: 'smooth'});
            } else if (event.code == 'Space' && event.shiftKey){
                event.preventDefault();
                document.querySelector('article.p-novel').scrollBy({top: 0, left: document.documentElement.clientWidth - parseFloat(window.getComputedStyle(document.querySelector('div[class="js-novel-text p-novel__text"]')).getPropertyValue('line-height')) * 3, behavior: 'smooth'});
            }
        }
    }
    var arrHtml, i, element1, element2;

    window.addEventListener('keydown', fe, false);

    arrHtml = document.querySelector('div[class="js-novel-text p-novel__text"]').innerHTML.replace(/(<ruby>[\s\S]*?<\/ruby>|<[^<>]+>)/g, '{split}$1{split}').split('{split}');
    if (arrHtml.length > 0){
        for (i=0; i < arrHtml.length; i++){
            if (arrHtml[i].indexOf('<') == -1) arrHtml[i] = arrHtml[i].replace(/(?<=[^\x01-\x7E]|^)(\d{1,2})(?=[^\x01-\x7E]|$)/g, '<span class="tcy">$1</span>').replace(/(?<=[^\x01-\x7E]|^)([\!\?]{1,3})(?=[^\x01-\x7E]|$)/g, '<span class="tcy">$1</span>').replace(/(?<=[^\x01-\x7E]|^)([a-zA-Z\$\\\%\&])(?=[^\x01-\x7E]|$)/g, '<span class="tcy">$1</span>').replace(/([^\x01-\x7E])[゛ﾞ]/g,'<span class="tcy">$1\u3099</span>').replace(/([^\x01-\x7E])[゜ﾟ]/g,'<span class="tcy">$1\u309A</span>');
        }

        document.querySelector('div[class="js-novel-text p-novel__text"]').innerHTML = arrHtml.join('');
    }
})();