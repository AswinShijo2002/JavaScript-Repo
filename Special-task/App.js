var bulb_off=document.getElementById("bulboff");
var bulb_off=document.getElementById("darkcat");
var bulb_off=document.getElementById("switch");
var bulb_off=document.getElementById("onbtn");
var bulb_off=document.getElementById("offbtn");

function on(){
    bulb_off.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    darkcat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchmode.textcontent="switched on";
    onbtn.style.backgroundcolor="green";
    offbtn.style.backgroundcolor="grey";
}

function off(){
    bulb_off.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    darkcat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchmode.textcontent="switched off";
    onbtn.style.backgroundcolor="grey";
    offbtn.style.backgroundcolor="red";
}