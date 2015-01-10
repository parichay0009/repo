var randomColor = function() {   
  var colors = ['navy', 'slate', 'olive', 'moss', 'chocolate',...];   
  return colors[(Math.random() * colors.length) >>> 0];
};

var randomCat = function() { ... }; 

var color = randomColor();
var cat = randomCat();

template.uuid = color + '-' + cat;
templtae.color = color;
template.avatar = 'images/' + cat + '.jpg';