console.log('Loaded!');
// MAking chages in html though java script

var element = document.getElementById("main-text");
element.innerHTML="Adarsh";

// Moving image

var margin=0;
function moveRight(){
 margin = margin + 10;
 m.style.marginLeft = margin +'px';
}

var m = document.getElementById("img");
m.onclick = function() {
  var interval = setInterval(moveRight, 100); 
};