"use strict"; 

document.addEventListener("DOMContentLoaded", function (event) {
   var _selector = document.querySelector('input[id=darktheme]');
   _selector.addEventListener('change', function (event) {

       if (_selector.checked) {
           document.getElementById("chatBox").style.backgroundColor = "black";
           document.getElementById("chatBox").style.color = "white";

       } else {
           document.getElementById("chatBox").style.backgroundColor = "lightgrey";
           document.getElementById("chatBox").style.color = "black";
       }
   });
});

document.addEventListener("DOMContentLoaded", function (event) {
   var _selectorTwo = document.querySelector('input[id=large]');
   _selectorTwo.addEventListener('change', function (event) {

       if (_selectorTwo.checked) {
           document.getElementById("chatBox").setAttribute("style", "font-size: 2em;");
       } else {

           document.getElementById("chatBox").setAttribute("style", "font-size: 1em;");
       }
   });
});




addEventListener("keypress", enterKey);
function enterKey(event){
   var textBox = document.getElementById("textBox");
   var keyCode = event.keyCode;
   if(keyCode === 13){
       var visual = textBox.value;
       Chatty.setChat(visual);
       Chatty.displayMessages();
        

   }};

//    addEventListener("click", enterKey);
// function enterKey(event){
//    var textBox = document.getElementById("textBox");
//    var keyCode = event.keyCode;
//    if(keyCode === ){
//        var visual = textBox.value;
//        Chatty.setChat(visual);
//        Chatty.displayMessages();
        

//    }};