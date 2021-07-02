const express = require('express')
const router = express.Router()
const propertysController = require ('../controllers/propertys.controller')

router.get('/find', propertysController.find);

router.get('/findbyid/:id', propertysController.findById);

router.get('/findwith', propertysController.findWith);

router.post('/create', propertysController.create);

router.put('/update/:id', propertysController.update);

router.delete('/delete/:id', propertysController.delete);

module.exports = router;