const express = require('express')

const router = express.Router();

const userController = require('../controllers/user.controller');

//Definimos ruta obtener todos los usuarios GET
router.get('/users', userController.getUsers);
;//agregamos un nuevo usuario POST

router.post('/users', userController.createUser);
//borrar un usuario DELETE
router.delete('/users',userController.deleteUser);
// Actualizar un usuario PUT
router.put('/users', userController.updateUser);
//obtener un usuario especifico GET

//Exportamos router para poder usar rutas en app.js

module.exports = router;