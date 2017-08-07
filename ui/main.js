console.log('Loaded!');

 
var button = document.getElementById("counter");
button.onclick = function() {
    
    //Create a object
    var request = new XMLHttpRequest();
    
    //Make a request
  request.open('GET','http://adarshagrawal38.imad.hasura-app.io/counter',true);
  request.send(null);
  
    //capture the response store in the variable
    request.onredystatechange = function(){
        if(request.readyState == XMLHttpRequest.Done){
            //if(request.status == 200){
              //  var c = request.responseText();
                //var span = document.getElementById("count");
               //  span.innerHTML = c.toString();
           // }
        }
    };
  
};