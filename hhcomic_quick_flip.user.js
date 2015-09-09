// ==UserScript==
// @name         HHComic quick flip
// @namespace    http://seewang.me/
// @version      1.0
// @description  bind left&right arrow key with previous&next page, no more clicks
// @author       cwang22
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @match        http://paga.hhcomic.net/*/*
// @grant        none
// ==/UserScript==

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            prevpage();
            break;

        case 39: // right
            nextpage();
            break;         
        default: return;
    }
});