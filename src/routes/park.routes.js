const express = require('express')
const router = express.Router()
const ParkController =   require('../controllers/parques.controller');
// Retrieve all employees
router.get('/', ParkController.findAll);
// Create a new employee
router.post('/', ParkController.create);
// Retrieve a single employee with id
router.get('/:id', ParkController.findById);
// Update a employee with id
router.put('/:id', ParkController.update);
// Delete a employee with id
router.delete('/:id', ParkController.delete);
router.get('/estadisticas/:id_user/:fechaDesde/:fechaHasta', ParkController.findByParams);
module.exports = router