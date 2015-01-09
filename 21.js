template.subscribeCallback = function(e) {
  template.async(function(){
  	var chatDiv = document.querySelector('.chat-list');
    chatDiv.scrollTop = chatDiv.scrollHeight; // scroll to bottom
  });
};