var Chatty = (function(msgChatty) {
  var inputMsg = document.getElementById("textBox");
  
  function msgDisplay(messages) {
  	var msgGet = Chatty.getter(messages);
    var msgBase = inputMsg.value;
    msgGet.push(msgBase);
  	console.log("messages", msgGet)
    Chatty.myData(msgGet);
  }

	inputMsg.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
    	console.log("event", event)
      msgDisplay();
    }
	})

  return msgChatty;
}(Chatty))