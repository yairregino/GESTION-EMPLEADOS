const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const empleadoRoutes = require('./routes/empleado.routes');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3030;
const URI = 'mongodb://localhost/empleados';

// Configuración de la conexión a la base de datos
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB is connected'))
  .catch(err => console.error(err));

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Ruta para recibir o enviar datos desde el servidor
app.use('/api/empleados', empleadoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
