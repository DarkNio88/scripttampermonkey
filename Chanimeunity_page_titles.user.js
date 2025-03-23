// ==UserScript==
// @name         Change animeunity page titles
// @namespace    https://github.com/DarkNio88/scripttampermonkey
// @version      0.1
// @description  Changes titles of animeunity pages
// @author       DarkNio
// @include      https://*.animeunity.*/*
// @icon         https://www.animeunity.so/favicon-32x32.png
// @updateURL    https://github.com/DarkNio88/scripttampermonkey/raw/main/Chanimeunity_page_titles.user.js
// @downloadURL  https://github.com/DarkNio88/scripttampermonkey/raw/main/Chanimeunity_page_titles.user.js
// @license      MIT
// @grant        window.onurlchange
// ==/UserScript==

(function() {
    'use strict';
    function changePageTitle() {
        document.title = document.title.replace("Streaming SUB ITA/ITA & Download","").replace("AnimeUnity ~ ","");
    }
    if (window.onurlchange === null) {
        window.addEventListener('urlchange', changePageTitle);
    }
    changePageTitle();
})();
