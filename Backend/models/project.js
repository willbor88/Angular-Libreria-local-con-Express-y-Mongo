'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({

name: String,
description: String,
category: String,
year: Number,
lang: String,
image:String
});

module.exports = mongoose.model('Project',ProjectSchema)//Project:Guarda los documentos en la coleccion
