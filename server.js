var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');

var app = express();
app.use(morgan('combined'));
var article = {
 'article-one' : {
  title : 'Article one | Adarsh ',
  heading : 'Article One',
  date: "Sep 5,2016",
  content: `
  <p>
            This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .
        </p>
        <p>
            This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .
        </p>
        <p>
            This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of article one .
        </p>`
},
'article-two': {
    title : 'Article TWO | Adarsh ',
  heading : 'Article TWO',
  date: "Sep 10,2016",
  content: `
  <p>
            This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .
        </p>
        `
},
'article-three': {
    title : 'Article THREE | Adarsh ',
  heading : 'Article THREE',
  date: "Sep 15,2016",
  content: `
  <p>
            This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .This is the content of artucle one .
        </p>
        `
}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial-scale-1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h3>
            ${heading}
        </h3>
        <hr />
        <div>
        ${date}
        </div>
        <div>
            ${content}    
        </div>
        </div>
    </body>
    </html>
    `;
    return htmlTemplate;
}
function hased(input,salt) {
    var hased = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return hased.toString('hex');
}
app.get('/hash/:input', function(req,res){
   var hasedString = hased(req.params.input, 'this-is-some-random-string');
   res.send(hasedString);
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var names=[];
app.get('/submit-name', function(req, res){
    var name = req.query.name;
    
    names.push(name);
    res.send(JSON.stringify(names));
});
var counter =0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/:articleName', function(req, res){
  var articleName = req.params.articleName;
  res.send(createTemplate(article[articleName]));  
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


