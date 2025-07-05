// ==UserScript==
// @name         Yahoo! Japan Autoplay Stop
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-06-29
// @description  Yahoo! Japan Autoplay Stop
// @author       Yuyushiki
// @match        https://s.yimg.jp/images/yvpub/player/vamos/pc/latest/player.html?*
// @icon         https://s.yimg.jp/favicon.ico
// @grant        none
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Yahoo!_Japan_Autoplay_Stop.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Yahoo!_Japan_Autoplay_Stop.user.js
// @supportURL   https://github.com/msthoshi/UserScript
// ==/UserScript==

(function() {
    var intervalId, blnEnd;
    function RUNINterval(elements){
        var element;
        for (element of elements){
            if (!element.paused){
                element.pause();
                blnEnd = true;
            }
        }
        if (blnEnd) window.clearInterval(intervalId);
    }
    function DCLEvent(){
        var elements;
        elements = document.getElementsByTagName('video');
        if (elements && elements.length > 0) intervalId = window.setInterval(RUNINterval, 100, elements);
        window.removeEventListener('load', DCLEvent, false);
    }
    blnEnd = false;
    window.addEventListener('load', DCLEvent, false);
})();
