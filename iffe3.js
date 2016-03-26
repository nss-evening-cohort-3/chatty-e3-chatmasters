"use strict";

let Chatty = function(original) {
let erase = document.getElementsByClassName("delete");
let input = document.getElementById("input");
let container = document.getElementById("container");

let acceptedMsg = document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.tagName === "acceptedMsg") {

    function deleteBtn(event) {
    let thisCard = event.target.parentElement;
    container.removeChild(thisCard)
}

function deleteBtnEventListener() {
	for(let i = 0; i < erase.length; i++) {
		let gone = document.getElementsByClassName("delete")
		   for( let j = 0; j < gone.length; j++)
		   	gone[j].addEventListener("click", deleteBtn)
	}
}

    // function removeElement(event) {
    //   let thisElement = document.getElementById(gone);
    // thisElement.parentNode.removeChild(thisElement);
  }
 };

}();_


