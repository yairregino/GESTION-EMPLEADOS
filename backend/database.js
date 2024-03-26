const mongoose = require('mongoose');
const URI = 'mongodb://localhost/empleados';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;
