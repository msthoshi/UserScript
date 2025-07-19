// ==UserScript==
// @name         Redirect to Image from firm
// @namespace    https://github.com/msthoshi/UserScript
// @version      2025-07-19T12:03:00
// @description  Redirect to Image from firm
// @author       yuyushiki
// @homepageURL  https://github.com/msthoshi/UserScript
// @supportURL   https://github.com/msthoshi/UserScript
// @updateURL    https://github.com/msthoshi/UserScript/raw/main/Redirect_to_Image_from_firm.user.js
// @downloadURL  https://github.com/msthoshi/UserScript/raw/main/Redirect_to_Image_from_firm.user.js
// @match        https://trans.firm.in/img-*.html
// @icon         https://trans.firm.in/3.jpg
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    var xmlHttpRequest;
    xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function(){
        var match;
        if(this.readyState == 4 && this.status == 200){
            // レスポンスの表示
            match = this.responseText.match(/<img class='centred_resized' src='(https:\/\/trans\.firm\.in\/upload\/big\/[^'<>]+)' alt='image' \/>/);
            if (match){
                window.location.href = match[1];
            }
        }
    }
    xmlHttpRequest.open('POST', window.location.href);

    // サーバに対して解析方法を指定する
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // データをリクエスト ボディに含めて送信する
    xmlHttpRequest.send('imgContinue=Continue+to+image+...+');
})();
