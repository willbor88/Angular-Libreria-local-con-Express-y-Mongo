'use strict'


var express = require ('express');
var ProjectController = require('../controllers/project');

var router = express.Router(); //Servicio de rutas con sus metodos
var multipart = require ('connect-multiparty');//Permite cargar los archivos tipo imagen a una ruta
var multipartMiddleware = multipart({uploadDir:'../Backend/upload'});

router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
router.get('/project/:id?',ProjectController.getProject);
router.get('/projects',ProjectController.getProjects);
router.put('/project/:id',ProjectController.updateProject);
router.delete('/project/:id',ProjectController.deleteProject);
router.post('/upload-image/:id?',multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image',ProjectController.getImageFile);


module.exports = router;




