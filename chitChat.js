"use strict"
var Chatty = (function(oldChatty) {
	var newMessage = document.getElementById("chatBox");
	var userMessages = [];

	oldChatty.myData = function(messages) {
		for (var msg in messages) {
			userMessages.push(messages[msg]);
		}
        var outputString = "";
		for (var i = 0; i < userMessages.length; i++) {
	        //Build up Dom string
	        outputString += `<div>${userMessages[i]}<button id="gone">Delete</button></div>`;
    	};	
      newMessage.innerHTML += outputString;
	}


	oldChatty.listUserInput = function() {
		var newLine = document.createElement("li");
		var removeInput = document.createElement("button");
		removeInput.textContent = "Remove Message";
		var elementLabel = document.createElement("label");
		elementLabel.textContent = document.getElementById("input").value
		document.getElementById("addChats").appendChild("newLine");
		newLine.appendChild("elementLabel");
		newLine.appendChild("removeInput");

	}


	return oldChatty;
}(Chatty));







// One IIFE should accept an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.

// One IIFE should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.

