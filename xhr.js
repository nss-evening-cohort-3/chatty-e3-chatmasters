var Chatty = (function() {
	var chatCall = [];

	return {
		
		getChat: function() {
			return chatCall;
		},

		setChat: function(newMessage) {
			chatCall.push({"message": newMessage});
		},

		loadChat: function() {

			var chatter = new XMLHttpRequest();

			chatter.addEventListener("load", function() {
				chatCall = JSON.parse(this.responseText).responses;
				// console.log("messages", chatCall);
				Chatty.displayMessages(chatCall);
			});

			chatter.open("GET", "messages.json");
			chatter.send();
		}
	}
}());

Chatty.loadChat();