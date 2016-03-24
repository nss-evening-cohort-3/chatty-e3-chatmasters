"use strict"
var listChatty = (function() {
	var newMessage = document.getElementById("chatty")
	var userInput = [];
	
	for (var i = 0; i < chatCall.length; i++) {
          let newMessage = responses[i];
        //Build up Dom string
        outputString += `<div>${responses.Name}</div>`;
        outputString += `<div>${responses.Quest}</div>`;
        outputString += `<div>${responses.Quest}</div>`;
        outputString += `<div>${responses.Color}</div>`;
        outputString += `<div>${responses.Speed}</div>`;
        outputString += `<div>${responses.Cake}</div>`;
        outputString += `<button id="gone">Delete</button>`;
         
      }
      newMessage.innerHTML += outputString;
		
	};

	function listUserInput() {
		var emptyString = "";
		var newLine = document.createElement("li");
		var removeInput = document.createElement("button");
		removeInput.textContent = "Remove Message";
		var elementLabel = document.createElement("label");
		elementLabel.textContent = document.getElementById("input").value
		document.getElementById("addChats").appendChild("newLine");
		newLine.appendChild("elementLabel");
		newLine.appendChild("removeInput");

	}
	


}(Chatty));







// One IIFE should accept an element id, and the user message, and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this IIFE. This IIFE should expose a function to read all messages, and delete a single message.

// One IIFE should accept a message element id and then remove the correct element from the DOM. This IIFE should also remove the corresponding message from the private array that was created in the previous IIFE.

