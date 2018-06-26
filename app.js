var express = require('express');
var todoController = require('./controllers/todoController');



var app=express();

app.set('view engine','ejs');

app.use('/assets',express.static('./public/assets'));
//app.use(express.static('./public/assets'));     //This line will run any url and find in public/assets folder

todoController(app);


app.listen(3000);

console.log('listening to port 3000');

