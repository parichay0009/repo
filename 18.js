template.sendMyMessage = function(e) {
  if(!template.input) return; // if the input field is empty, do nothing.

  template.$.pub.message = {
    uuid: uuid, 
    avatar: avatarUrl,
    color: color, 
    text: template.input  
  };
  template.$.pub.publish();
};