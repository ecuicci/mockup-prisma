const express = require('express');

const emojis = require('./emojis');

const router = express.Router();
const ExampleController = require('../Controllers/ExampleController');
//const VtexController = require('../Controllers/VtexController');
const PrismaController = require('../Controllers/PrismaController');


router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.get('/alive', ExampleController.alive);

router.get('/comenzar-flujo', PrismaController.comenzarFlujo);
router.post('/comenzar-flujo', PrismaController.comenzarFlujo);
router.get('/envioUltimosDigitos', PrismaController.enviarCuatroDigitos);
router.post('/envioUltimosDigitos', PrismaController.enviarCuatroDigitos);
router.get('/respuestaNoHabilitar', PrismaController.respuestaNoHabilitar);
router.post('/respuestaNoHabilitar', PrismaController.respuestaNoHabilitar);
router.get('/respuestaSiOK', PrismaController.respuestaSiOK);
router.post('/respuestaSiOK', PrismaController.respuestaSiOK);
router.get('/respuestaSiNoKEnHorario', PrismaController.respuestaSiNoKEnHorario);
router.post('/respuestaSiNoKEnHorario', PrismaController.respuestaSiNoKEnHorario);
router.get('/respuestaSiNoKFueraHorario', PrismaController.respuestaSiNoKFueraHorario);
router.post('/respuestaSiNoKFueraHorario', PrismaController.respuestaSiNoKFueraHorario);
router.get('/respuestaOpc1', PrismaController.respuestaOpc1);
router.post('/respuestaOpc1', PrismaController.respuestaOpc1);
router.get('/salir', PrismaController.salir);
router.post('/salir', PrismaController.salir);

router.use('/emojis', emojis);

module.exports = router;
