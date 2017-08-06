console.log('Loaded!');
// MAking chages in html though java script

var element = document.getElementById("main-text");
element.innerHTML="Adarsh";

// Moving image

var m = document.getElementById("img");
m.onClick = function() {
  m.style.marginLeft='100px';  
};