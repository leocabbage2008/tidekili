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

    function toList(valin){
        let res = [];
        let i;
        for(i in valin){
            res.push(i);
        }
        return res;
    }
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
        listCell = toList(listCell);
        let listHref = [];
        var listNDup = [];
        let i;
        for (i in listCell){listHref.pop(i.getAttribute("href"))};
        for (let it; it < listHref.length; it++){
            // same links, topic, avatar, and last poster
            if (it%3==0){
                listNDup.push("aops.com"+listHref[it]);
            }
        }
        
    }
    function friends(){
        let ni = prompt("What users friends would you like to know about?");
        window.open("https://artofproblemsolving.com/community/user/"+ni);
        //scroll to bottom of page
        //load all of friends
        //load friend images
        //load friend statuses
        //alert go to aops.com/blah blah blah
        //code to load everything
    }
})();
