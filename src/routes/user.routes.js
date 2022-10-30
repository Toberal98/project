const express = require('express')
const router = express.Router()
const UsrController =   require('../controllers/user.controller');
// Retrieve all employees
router.get('/', UsrController.findAll);
router.get('/:username/:password', UsrController.login);
// Create a new employee
router.post('/', UsrController.create);
// Retrieve a single employee with id
router.get('/:id', UsrController.findById);
// Update a employee with id
router.put('/:id', UsrController.update);
// Delete a employee with id
router.delete('/:id', UsrController.delete);
module.exports = router