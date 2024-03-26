// Se requiere el modelo de empleado
const Empleado = require('../models/empleado');

// Se define el controlador de empleado como un objeto
const empleadoCtrl = {};

// Método para obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

// Método para crear un nuevo empleado
empleadoCtrl.createEmpleados = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({ status: 'Empleado guardado' });
};

// Método para obtener un único empleado por su ID
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    const empleadoUnico = await Empleado.findById(req.params.id);
    res.json(empleadoUnico);
};

// Método para editar un empleado existente
empleadoCtrl.editarEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleadoEdit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
    res.json({ status: 'Empleado Actualizado' });
};

// Método para eliminar un empleado por su ID
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ status: 'Empleado Eliminado' });
};

// Se exporta el objeto controlador para ser utilizado en otros archivos
module.exports = empleadoCtrl;
