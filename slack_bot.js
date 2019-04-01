"use strict";

const rp = require('request-promise');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const TOKEN = 'ZoUY133ateZvvLKmOhF9lNAd';
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.status(200).send("Hello World") ;
})
app.post('/', (req, res) => {
  var explain;
  if(req.body.token !== TOKEN){
	res.status().send() ;
  }
  if(!req.body.text){
	res.status(400).send("specify a user") ;
  }
  var ram = req.body.text.slice(" ")[1] ;
  var url = `https://api.github.com/users/${req.body.text.slice(" ")[0]}` ;
  fetch(url)
  .then(res => res.json())
  .then(function(json){
    if (json.message == "Not Found"){
      explain = "user not found"
    }
    else{
      if (!!ram){
        valor = json[`${ram}`] ;
        explain = `${ram}: ${valor}` ;
      }
      else{
        explain = `login: ${json.login}, name: ${json.name}, url: ${json.html_url}`
      }
    }
    res.send(explain) ;
  })
});
// This code "exports" a function 'listen` that can be used to start
// our server on the specified port.
exports.listen = function(port, callback) {
  callback = (typeof callback != 'undefined') ? callback : () => {
    console.log('Listening on ' + port + '...');
  };
  app.listen(port, callback);
};
