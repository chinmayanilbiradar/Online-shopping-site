var express=require('express');
var app=express();
var path = require('path');
app.use(express.static(__dirname + '/public'));  
app.get('/',function(req,res){
  res.sendFile(__dirname + '/wt.html');
  });
var server=app.listen(3000,function(){
console.log("We have started our server on port 3000");
});