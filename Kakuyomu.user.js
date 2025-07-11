// ==UserScript==
// @name         Kakuyomu JS
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-07-11
// @description  Kakuyomu User JavaScript
// @author       Yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Kakuyomu.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Kakuyomu.user.js
// @match        https://kakuyomu.jp/works/*/episodes/*
// @icon         https://cdn-static.kakuyomu.jp/images/brand/favicons/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    function fe(event){
        if (event.isTrusted){
            if (event.code == 'KeyN'){
                document.querySelector('#contentMain-readNextEpisode').click();
            } else if (event.code == 'KeyP'){
                document.querySelector('#contentMain-readPreviousEpisode').click();
            } else if (event.code == 'KeyL'){
                document.querySelector('#worksEpisodesEpisodeHeader-closeButton > a').click();
            } else if (event.code == 'ArrowLeft'){
                event.preventDefault();
                document.querySelector('div.widget-episodeBody.js-episode-body').scrollBy({top: 0, left: -parseFloat(window.getComputedStyle(document.querySelector('div.widget-episodeBody.js-episode-body')).getPropertyValue('line-height'))*2, behavior: 'smooth'});
            } else if (event.code == 'ArrowRight'){
                event.preventDefault();
                document.querySelector('div.widget-episodeBody.js-episode-body').scrollBy({top: 0, left: parseFloat(window.getComputedStyle(document.querySelector('div.widget-episodeBody.js-episode-body')).getPropertyValue('line-height'))*2, behavior: 'smooth'});
            } else if (event.code == 'Space' && !event.shiftKey){
                event.preventDefault();
                document.querySelector('div.widget-episodeBody.js-episode-body').scrollBy({top: 0, left: parseFloat(window.getComputedStyle(document.querySelector('div.widget-episodeBody.js-episode-body')).getPropertyValue('line-height')) * 3 - document.documentElement.clientWidth, behavior: 'smooth'});
            } else if (event.code == 'Space' && event.shiftKey){
                event.preventDefault();
                document.querySelector('div.widget-episodeBody.js-episode-body').scrollBy({top: 0, left: document.documentElement.clientWidth - parseFloat(window.getComputedStyle(document.querySelector('div.widget-episodeBody.js-episode-body')).getPropertyValue('line-height')) * 3, behavior: 'smooth'});
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
        }).replace(/[0-9a-zA-Z#\$%&\\\!\?\/]+/g, function(match){
            var str;
            if (match.length == 1 || (/^(?:\!\!\!|[\!\?]{1,2}|[0-9]{1,2}|)$/).test(match) || (/^(?:ii|iii|iv|vi|vii|viii|ix|xi|xii|xiii)$/i).test(match)){
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
        }).replace(/([^\x01-\x7E])[゛ﾞ]/g,'<span class="tcy">$1\u3099</span>').replace(/([^\x01-\x7E])[゜ﾟ]/g,'<span class="tcy">$1\u309A</span>');
        return(strTemp);
    }
    var arrHtml, i;

    window.addEventListener('keydown', fe, false);

    arrHtml = document.querySelector('div.widget-episodeBody.js-episode-body').innerHTML.replace(/(<ruby>[\s\S]*?<\/ruby>|<[^<>]+>)/g, '{split}$1{split}').split('{split}');
    if (arrHtml.length > 0){
        for (i=0; i < arrHtml.length; i++){
            if (arrHtml[i].indexOf('<') == -1){
                arrHtml[i] = ReplaceHtml(arrHtml[i]);
            }
        }
        document.querySelector('div.widget-episodeBody.js-episode-body').innerHTML = arrHtml.join('') + '<div class="eof"></div>';
    }
})();
