const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeControllers')

router.get('/', homeController.showHomePage)
router.get('/properties', homeController.getAllHomes)
router.get('/properties/:id', homeController.getHomeById)
router.post('/properties', homeController.createHome)
router.put('/properties/:id', homeController.updateHome)
router.delete('/properties/:id', homeController.deleteHome)

module.exports = router
