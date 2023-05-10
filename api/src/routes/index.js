const { Router } = require('express');

const getDogs = require('../handlers/getDogsHandler');
const getDogsByIdHandler = require('../handlers/getDogsByIdHandler');
const createDog = require('../handlers/createDogHandler');
const getTemperaments = require('../handlers/getTemperamentsHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//'TODOS LOS PERROS POR RAZA'
router.get('/dogs', getDogs );
//'DETALLE DE UN PERRO'
router.get('/dogs/:id', getDogsByIdHandler);
//'NOMBRE DE PERROS RECIBIDOS POR QUERY'
//router.get('/dogs/name?=', getDogsByName);
// 'CREAR UN PERRO'
router.post('/dogs', createDog);
//'OBETENR LOS TEMPERAMENTOS'
router.get('/temperaments', getTemperaments);


module.exports = router;
