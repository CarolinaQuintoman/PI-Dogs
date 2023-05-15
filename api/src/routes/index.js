const { Router } = require('express');

const getDogsHandler = require('../handlers/getDogsHandler');
const getDogsByIdHandler = require('../handlers/getDogsByIdHandler');
const createDog = require('../handlers/createDogHandler');
const getTemperaments = require('../handlers/getTemperamentsHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
//middlaware
const validate = (req,res,next) =>{
    const { image,name, heightMax, heightMin, weightMin, weightMax, life_span, temperaments } = req.body;
    if(!image || !name || !heightMin || !heightMax || !weightMin || !weightMax || !life_span || !temperaments)
    return res.status(400).json({ error:"Missing Data" });
    
    next();
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//'TODOS LOS PERROS POR RAZA'
router.get('/dogs', getDogsHandler );
//'DETALLE DE UN PERRO'
router.get('/dogs/:id', getDogsByIdHandler);
//'NOMBRE DE PERROS RECIBIDOS POR QUERY'
//router.get('/dogs/name?=', getDogsByName);
// 'CREAR UN PERRO'
router.post('/dogs', validate, createDog);
//'OBETENR LOS TEMPERAMENTOS'
router.get('/temperaments', getTemperaments);


module.exports = router;
