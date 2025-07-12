// ==UserScript==
// @name         Narou JS
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-07-12T14:19:00
// @description  Narou User JavaScript
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Narou.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Narou.user.js
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
    function toHalfWidth(str) {
        // 全角英数字を半角に変換
        str = str.replace(/[Ａ-Ｚａ-ｚ０-９！？]/g, function(match) {
            return String.fromCharCode(match.charCodeAt(0) - 0xFEE0);
        });
        return str;
    }
    function ReplaceHtml(strHtml){
        var strTemp;
        strTemp = strHtml.replace(/[！？]{2,}|[０-９]{2,}/g, function(match){
            return(((/^(?:！！！|[！？]{2}|[０-９]{2})$/).test(match) || (/^(?:ｉｉ|ｉｉｉ|ｉｖ|ｖｉ|ｖｉｉ|ｖｉｉｉ|ｉｘ|ｘｉ|ｘｉｉ|ｘｉｉｉ|ＩＩ|ＩＩＩ|ＩＶ|ＶＩ|ＶＩＩ|ＶＩＩＩ|ＩＸ|ＸＩ|ＸＩＩ|ＸＩＩＩ)$/).test(match)) ? toHalfWidth(match) : match);
        }).replace(/[0-9a-zA-Z\!\#\$\%\&\*\+\,\-\.\/\:\;\=\?\@\\\^\_\~]+/g, function(match){
            var str;
            if (match.length == 1 || (/^(?:\!\!\!|[\!\?]{1,2}|[0-9]{1,2})$/).test(match) || (/^(?:ii|iii|iv|vi|vii|viii|ix|xi|xii|xiii)$/i).test(match)){
                str = '<span class="tcy">' + match +'</span>';
            } else {
                if (match == '1/2'){
                    str = '½';
                } else if (match == '1/3'){
                    str = '⅓';
                } else if (match == '2/3'){
                    str = '⅔';
                } else if (match == '1/4'){
                    str = '¼';
                } else if (match == '3/4'){
                    str = '¾';
                } else if (match == '1/5'){
                    str = '⅕';
                } else if (match == '2/5'){
                    str = '⅖';
                } else if (match == '3/5'){
                    str = '⅗';
                } else if (match == '4/5'){
                    str = '⅘';
                } else if (match == '1/6'){
                    str = '⅙';
                } else if (match == '1/7'){
                    str = '⅐';
                } else if (match == '1/8'){
                    str = '⅛';
                } else if (match == '1/9'){
                    str = '⅑';
                } else if (match == '1/10'){
                    str = '⅒';
                } else {
                    str = match;
                }
            }
            return(str);
        }).replace(/([^\x01-\x7E])[゛ﾞ]/g,'<span class="tcy">$1\u3099</span>').replace(/([^\x01-\x7E])[゜ﾟ]/g,'<span class="tcy">$1\u309A</span>').replace(/°/g,'度');
        return(strTemp);
    }
    var arrHtml, i, element1, element2;

    window.addEventListener('keydown', fe, false);

    arrHtml = document.querySelector('h1.p-novel__title').innerHTML.replace(/(<ruby>[\s\S]*?<\/ruby>|<[^<>]+>)/g, '{split}$1{split}').split('{split}');
    if (arrHtml.length > 0){
        for (i=0; i < arrHtml.length; i++){
            if (arrHtml[i].indexOf('<') == -1){
                arrHtml[i] = ReplaceHtml(arrHtml[i]);
            }
        }
        document.querySelector('h1.p-novel__title').innerHTML = arrHtml.join('');
    }

    arrHtml = document.querySelector('div[class="js-novel-text p-novel__text"]').innerHTML.replace(/(<ruby>[\s\S]*?<\/ruby>|<[^<>]+>)/g, '{split}$1{split}').split('{split}');
    if (arrHtml.length > 0){
        for (i=0; i < arrHtml.length; i++){
            if (arrHtml[i].indexOf('<') == -1){
                arrHtml[i] = ReplaceHtml(arrHtml[i]);
            }
        }
        document.querySelector('div[class="js-novel-text p-novel__text"]').innerHTML = arrHtml.join('');
    }
})();
