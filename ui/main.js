console.log('Loaded!');

 
var button = document.getElementById("counter");
button.onclick = function() {
    
    //Create a object
    var request = new XMLHttpRequest();
    
   
  
    //capture the response store in the variable
    request.onredystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //TAke some action
            if(request.status === 200){
                var c = request.responseText;
                var span = document.getElementById('count');
        span.innerHTML = c.toString();
            }
        }
    };
     //Make a request
  request.open('GET','http://adarshagrawal38.imad.hasura-app.io/counter',true);
  request.send(null);
 
};

var nameinput = document.getElementById('name');
var n = nameinput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function() {
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE) {
        if(request.status === 200) {
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
              for(var i=0; i<name.length; i++) {
                  list += '<li>' + name[i] + '</li>';
              }
              var ul = document.getElementById('namelist');
              ul.innerHTML = list;
        }
    }  
  };
  request.open('GET','http://adarshagrawal38.imad.hasura-app.io/submit-name?name=' + n, true);
};
