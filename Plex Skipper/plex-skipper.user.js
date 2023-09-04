// ==UserScript==
// @name               Plex Skipper
// @namespace          https://github.com/x1ao4/plex-skipper
// @version            1.0
// @description        Automatically skip intros, credits, and autoplay the next episode on Plex Web.
// @description:zh-CN  在 Plex Web 实现自动跳过片头、片尾和自动播放下一集。
// @description:zh-HK  在 Plex Web 實現自動跳過片頭、片尾和自動播放下一集。
// @description:zh-TW  在 Plex Web 實現自動跳過片頭、片尾和自動播放下一集。
// @author             x1ao4
// @match              https://app.plex.tv/*
// @match              http://localhost:32400/*
// @match              http://127.0.0.1:32400/*
// @license            MIT
// @grant              none
// ==/UserScript==

(function() {
    'use strict';

    // Set the interval for checking the buttons and the "play next" element
    const interval = 1000;

    // Set the selectors for the buttons
    const skipIntroSelector = 'button.AudioVideoFullPlayer-overlayButton-D2xSex';
    const skipOutroSelector = 'button.AudioVideoFullPlayer-overlayButton-D2xSex';

    // Function to click a button if it exists
    function clickButton(selector) {
        const buttons = document.querySelectorAll(selector);
        for (const button of buttons) {
            button.click();
            break;
        }
    }

    // Function to check if an element exists
    function elementExists(selector) {
        return document.querySelector(selector) !== null;
    }

    // Set an interval to check for the buttons and the "play next" element, and click them or press space if they exist
    setInterval(() => {
        clickButton(skipIntroSelector);
        clickButton(skipOutroSelector);
        if (elementExists('label[for="autoPlayCheck"]')) {
            document.dispatchEvent(new KeyboardEvent('keydown', {key: ' ', keyCode: 32}));
        }
    }, interval);
})();
