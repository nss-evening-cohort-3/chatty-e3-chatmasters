var Chatty = (function(msgChatty) {
  var input = document.getElementById("textBox");
  var msgBase = {};
  
  function msgDisplay() {
  	var msgGet = Chatty.getter();
    var msgBase = input.value;
    msgGet.push(msgBase);
    Chatty.myData(msgGet);
  }

	input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      msgDisplay();
    }
	})

  return msgChatty;
}(Chatty))