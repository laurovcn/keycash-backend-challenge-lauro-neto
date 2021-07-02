const express = require('express')
const router = express.Router()
const propertysController = require ('../controllers/propertys.controller')

router.get('/property/find', propertysController.find);

router.get('/property/findbyid/:id', propertysController.findById);

router.get('/property/findwith', propertysController.findWith);

router.post('/property/create', propertysController.create);

router.put('/property/update/:id', propertysController.update);

router.delete('/property/delete/:id', propertysController.delete);

module.exports = router;