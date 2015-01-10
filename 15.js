var randomColor = function() {   
  var colors = ['navy', 'slate', 'olive', 'moss', 'chocolate',...];   
  return colors[(Math.random() * colors.length) >>> 0];
};

var randomCat = function() { ... }; 

template.uuid = randomColor() + '-' + randomCat();