"use strict";

let ByeChatty = function(original) {
let erase = document.getElementsByClassName("gone");

let acceptedMsg = document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.tagName === "acceptedMsg") {

    function deleteBtn(event) {
    let thisCard = event.target.parentElement;
    container.removeChild(thisCard)
}

function deleteBtnEventListener(event) {
	for(let i = 0; i < erase.length; i++) {
		let bye = document.getElementsByClassName("gone")
		   for( let j = 0; j < bye.length; j++)
		   	bye[j].addEventListener("click", Delete)
	  }
    }

   }
 });

}();


