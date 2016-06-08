// JavaScript File
// these are the variables that are being
var riceBag = document.getElementById("riceBag");
var riceMeasure = document.getElementById("riceMeasure");
var riceWash = document.getElementById("riceWash");
var riceStrain = document.getElementById("riceStrain");
var ricePot = document.getElementById("ricePot");
var waterMeasure = document.getElementById("waterMeasure");
var waterPour = document.getElementById("waterPour");
var riceStove1 = document.getElementById("riceStove1");
var riceStove2 = document.getElementById("riceStove2");
var riceTimer = document.getElementById("riceTimer");
var riceBowl = document.getElementById("riceBowl");



// Using this click function, this picture along with the text will disappear, and the new div filled with text and pictures will pop up.
riceBag.addEventListener("click", function(){
    riceMeasure.className = "";
    riceBag.className = "hideMe";
});

// Using this drop function, you can drag and drop one div into the other, and thedic that surrounds those two divs is switched out with the next.
riceMeasure.addEventListener("drop", function(){
    riceWash.className = "";
    riceMeasure.className = "hideMe";
    
});

// Using this drop function, you can drag and drop one div into the other, and thedic that surrounds those two divs is switched out with the next.
riceWash.addEventListener("drop", function(){
    riceStrain.className = "";
    riceWash.className = "hideMe";
});

// Using this drop function, you can drag and drop one div into the other, and thedic that surrounds those two divs is switched out with the next.
riceStrain.addEventListener("drop", function(){
    ricePot.className = "";
    riceStrain.className = "hideMe";
});

// Using this drop function, you can drag and drop one div into the other, and thedic that surrounds those two divs is switched out with the next.
ricePot.addEventListener("drop", function(){
    waterMeasure.className = "";
    ricePot.className = "hideMe";
});

// Using this drop function, you can drag and drop one div into the other, and thedic that surrounds those two divs is switched out with the next.
waterMeasure.addEventListener("drop", function(){
    waterPour.className = "";
    waterMeasure.className = "hideMe";
});

// Using this drop function, you can drag and drop one div into the other, and thedic that surrounds those two divs is switched out with the next.
waterPour.addEventListener("drop", function(){
    riceStove1.className = "";
    waterPour.className = "hideMe";
});

// Using this click function, this picture along with the text will disappear, and the new div filled with text and pictures will pop up.
riceStove1.addEventListener("click", function(){
    riceStove2.className = "";
    riceStove1.className = "hideMe";
});

// Using this click function, this picture along with the text will disappear, and the new div filled with text and pictures will pop up.
riceStove2.addEventListener("click", function(){
    riceTimer.className = "";
    riceStove2.className = "hideMe";
});

// Using this click function, this picture along with the text will disappear, and the new div filled with text and pictures will pop up.
riceTimer.addEventListener("click", function(){
    riceBowl.className = "";
    riceTimer.className = "hideMe";
});



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // ev.target.src = ""
}