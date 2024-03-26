const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

// Ruta para obtener todos los empleados
router.get('/', empleadoCtrl.getEmpleados);

// Ruta para crear un nuevo empleado
router.post('/', empleadoCtrl.createEmpleados);

// Ruta para obtener un único empleado por su ID
router.get('/:id', empleadoCtrl.getUnicoEmpleado);

// Ruta para editar un empleado existente
router.put('/:id', empleadoCtrl.editarEmpleado);

// Ruta para eliminar un empleado por su ID
router.delete('/:id', empleadoCtrl.eliminarEmpleado);

module.exports = router;
