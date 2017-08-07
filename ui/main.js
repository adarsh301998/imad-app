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
                var c = request.ResponseText;
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
  
  var name = ["name1", "name2", "name3"];
  var list = '';
  for(var i=0; i<name.length; i++) {
      list += '<li>' + name[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};
