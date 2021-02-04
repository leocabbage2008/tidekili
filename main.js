// ==UserScript==
// @name         !tidekili
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  breadcrumbs of interesting things
// @author       volcanogobbler and printrbot
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function like(){
        let totalScroll = 0;
        let loadInterval = setInterval(function timer() {
        let inner = document.getElementsByClassName("aops-scroll-inner")[0];
            let tempScroll = inner.scrollTop=inner.scrollHeight;
            if (!(tempScroll> totalScroll)){
                clearInterval(loadInterval);
        }
        }, 20);
        document.body.addEventListener("click", function f(){clearInterval(loadInterval)}); // <== stops on click of body

        let listCell = document.getElementsByClassName("cmty-full-cell-link");
        delete listCell[0]; //This is just links to post count... AGAIN?
        let listHref = [];
        var listNDup = [];
        for (let i = 0; i < listCell.length; i++){listHref.push(listCell[i].getAttribute("href"))};
        for (let it = 0; it < listHref.length; it++){
            temp = listHref[it];
            listHref[it]="we wuz here";
            if (!(temp in listHref)){
                listNDup.push("aops.com/"+temp);
            }
        }
        console.log(listNDup);
    }

    function friends(){
        let ni = prompt("What users friends would you like to know about?");
        window.open("https://artofproblemsolving.com/community/user/"+ni);
        let scroll = setInterval(function timer() {
        let inner = document.getElementsByClassName("aops-scroll-inner")[0];
            let tempScroll = inner.scrollTop=inner.scrollHeight;
            if (!(tempScroll> totalScroll)){
                clearInterval(loadInterval);
        }
        }, 20);
        document.body.addEventListener("click", function f(){clearInterval(scroll)}); // <== stops on click of body
        usernames = document.getElementsByClassName("cmty-friend-username");
        pictures = document.getElementsByClassName("cmty-avatar");
        statuses = document.getElementsByClassName("cmty-friend-message");
        if (document.confirm("Click ok to see info about your friends, else, just press cancel.")){// <== No links in alert boxes
            window.open("aops.com/friends");
        
        //code to load everything
    }
})();
