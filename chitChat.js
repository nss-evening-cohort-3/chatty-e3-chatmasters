"use strict"
var Chatty = (function(oldChatty) {
	var newMessage = document.getElementById("chatBox");


	oldChatty.displayMessages = function() {
		var buildString;
		for(var i = 0; i < Chatty.getChat().length; i++) {
			buildString = `<div><p>${Chatty.getChat()[i].message}</p></div>`;
			buildString += `<button id="gone">Delete</button>`;
			newMessage.innerHTML += buildString;
		
		}
	}


	return oldChatty;
}(Chatty));







// One IIFE should accept an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.

// One IIFE should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.

