// ==UserScript==
// @name         /r/anime flair clicker
// @namespace    http://seewang.me/
// @version      1.0
// @description  no more struggle to copy flair URLs by clicking /r/anime to toggle 
// @author       cwang22
// @match        https://www.reddit.com/r/anime/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(".click {width: auto; height: 14px;line-height: 13px;padding: 0 6px;background-image: none;background-color: #9ac;border: 1px solid #aaa;color: #3e5267;cursor: default;font-size: 11px !important;}.flair.click:hover{background-color: #9ac;}");
$(".flair").click(function(){
    $(this).toggleClass("click");
});