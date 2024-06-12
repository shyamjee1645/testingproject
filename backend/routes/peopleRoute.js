const express = require('express')
const router = express.Router()
const peopleController = require('../controllers/peopleControllers')

router.get('/', peopleController.getAllPeople)

module.exports = router
