const express = require('express')
const router = express.Router()
const propertysController = require ('../controllers/Propertys.Controller')

router.get('/', propertysController.find);

router.get('/findone/:id', propertysController.findOne);

router.get('/findby', propertysController.findby);

router.post('/', propertysController.create);

router.put('/:id', propertysController.update);

router.delete('/:id', propertysController.delete);


module.exports = router;