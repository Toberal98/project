const express = require('express')
const router = express.Router()
const Estadistica =   require('../controllers/estadistica.controller');
// Retrieve all employees
router.get('/', Estadistica.findAll);
// Create a new employee
router.post('/', Estadistica.create);
// Retrieve a single employee with id
router.get('/:id', Estadistica.findById);
// Update a employee with id
router.put('/:id', Estadistica.update);
// Delete a employee with id
router.delete('/:id', Estadistica.delete);
module.exports = router