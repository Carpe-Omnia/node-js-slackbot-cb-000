"use strict";

const rp = require('request-promise');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch'); 
const TOKEN = 'ZoUY133ateZvvLKmOhF9lNAd';

// Just an example request to get you started..
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/', (req, res) => {
  if(req.body.token !== TOKEN){
	res.status(400).send() ; 
  }
  if(!req.body.text){
	res.status(400).send("specify a user") ;
  }
  var url = `https://api.github.com/users/${req.body.text.slice(" ")[0]}` ; 
});
// This code "exports" a function 'listen` that can be used to start
// our server on the specified port.
exports.listen = function(port, callback) {
  callback = (typeof callback != 'undefined') ? callback : () => {
    console.log('Listening on ' + port + '...');
  };
  app.listen(port, callback);
};

