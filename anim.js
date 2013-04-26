var cat = document.getElementById('kitty');
var startButton = document.getElementById('start');
var fasterButton = document.getElementById('fast');
var normalButton = document.getElementById('normal');
var slowerButton = document.getElementById('slow');
var stopButton = document.getElementById('stop');
var objectId = "";

cat.style.left = '0px';

function walk(image, speed){
  var max = document.width - image.width;
  if(parseInt(image.style.left, 10) >= max){
    return;
  }
  image.style.left = (parseInt(image.style.left, 10) + speed) + 'px';
}

startButton.onclick = function() {
    cat.style.left = '0px';
    clearInterval(objectId);
    objectId = setInterval(function(){
    walk(cat, 3);
  }, 41.67);
};

fasterButton.onclick = function() {
  clearInterval(objectId);
  objectId = setInterval(function() {
    walk(cat, 8);
  }, 41.67);
};

normalButton.onclick = function() {
  clearInterval(objectId);
  objectId = setInterval(function() {
    walk(cat, 3);
  }, 41.67);
};

slowerButton.onclick = function() {
  clearInterval(objectId);
  objectId = setInterval(function() {
    walk(cat, 1);
  }, 41.67);
};

stopButton.onclick = function() {
  clearInterval(objectId);
};