var Chatty = (function() {
	var chatCall = [];

	return {

		loadChat: function() {

			var chatter = new XMLHttpRequest();

			chatter.addEventListener("load", function() {
				chatCall = JSON.parse(this.responseText).responses;
				// console.log("messages", chatCall);
				Chatty.myData(chatCall);
			});

			chatter.open("GET", "messages.json");
			chatter.send();
		}
	}
}())

Chatty.loadChat();