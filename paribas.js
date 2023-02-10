// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://goonline.bnpparibas.pl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bnpparibas.pl
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const username = 'username';

    function inputUsername() {
        if (document.getElementsByTagName('input').length == 0) {
            return setTimeout(inputUsername, 180);
        }

        const usernameInput = document.getElementsByTagName('input')[0];
        usernameInput.value = username;
        usernameInput.dispatchEvent(new Event('input', {bubbles:true}));
    }
    inputUsername();
})();
