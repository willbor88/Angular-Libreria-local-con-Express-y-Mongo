'use strict'


var express = require ("express");
var connect= require ("connect-multiparty");
var bodyParser= require("body-parser");
var app= express();

 //Carga de archivos de rutas
 var project_routes = require ('./routes/project');


 //Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//Convertir las peticiones a un objeto json
//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
 //Rutas
app.use('/api',project_routes)



 //Exportar
module.exports = app;




