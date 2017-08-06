console.log('Loaded!');
// MAking chages in html though java script

var element = document.getElementById("main-text");
element.innerHTML="Adarsh";

// Moving image

var marginLeft=0;
function moveRight(){
 marginLeft = margin + 10;
 m.style.marginLeft = marginLeft +'px';
}

var m = document.getElementById("img");
m.onclick = function() {
  var interval = setInterval(moveRight, 100); 
};