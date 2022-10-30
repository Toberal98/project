const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require employee routes
const userRoutes = require('./src/routes/user.routes')
const parkController = require('./src/routes/park.routes')
const tipoVisitante = require('./src/routes/tipoVisitante.routes')
const Estadistica = require('./src/routes/estadistica.routes')
// using as middleware
app.use('/api/v1/usr', userRoutes)
app.use('/api/v1/park', parkController)
app.use('/api/v1/tipoVisitante', tipoVisitante)
app.use('/api/v1/estadisticas', Estadistica)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});