const express = require('express')
const router = express.Router()
const tipoVisitante =   require('../controllers/tipoVisitante.controller');
// Retrieve all employees
router.get('/', tipoVisitante.findAll);
// Create a new employee
router.post('/', tipoVisitante.create);
// Retrieve a single employee with id
router.get('/:id', tipoVisitante.findById);
// Update a employee with id
router.put('/:id', tipoVisitante.update);
// Delete a employee with id
router.delete('/:id', tipoVisitante.delete);
module.exports = router