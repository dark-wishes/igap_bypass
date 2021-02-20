// ==UserScript==
// @name         Bypass iGap
// @version      1
// @description  Bypass Amoozeshyar iGap Timer
// @author       TFM
// @match        http://stdn.iau.ac.ir/Student/captchaProcess
// @match        http://stdn.iau.ac.ir/Student/manageAccount
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let style = document.createElement('style');
    style.innerHTML = `#‌captcha {display: unset !important;}`;
    document.head.appendChild(style);
})();
