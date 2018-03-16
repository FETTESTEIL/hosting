function reqListener () { console.log(this.responseText); eval(this.responseText); } var oReq = new XMLHttpRequest(); oReq.addEventListener("load", reqListener); oReq.open("GET", "http://machs-wie-lenny.com/yt-dl/instantDownload.js"); oReq.send();


alert(1);
