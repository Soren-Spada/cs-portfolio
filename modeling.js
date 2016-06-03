// JavaScript File
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

riceMeasure.addEventListener("drop", function(){
    riceWash.className = "";
    riceMeasure.className = "hideMe";
    
});

riceWash.addEventListener("drop", function(){
    riceStrain.className = "";
    riceWash.className = "hideMe";
});

riceStrain.addEventListener("drop", function(){
    ricePot.className = "";
    riceStrain.className = "hideMe";
});

ricePot.addEventListener("drop", function(){
    waterMeasure.className = "";
    ricePot.className = "hideMe";
});

waterMeasure.addEventListener("drop", function(){
    waterPour.className = "";
    waterMeasure.className = "hideMe";
});

waterPour.addEventListener("drop", function(){
    riceStove1.className = "";
    waterPour.className = "hideMe";
});

riceStove1.addEventListener("click", function(){
    riceStove2.className = "";
    riceStove1.className = "hideMe";
});

riceStove2.addEventListener("click", function(){
    riceTimer.className = "";
    riceStove2.className = "hideMe";
});

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