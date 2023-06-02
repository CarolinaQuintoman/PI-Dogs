const { Dog, Temperament } = require('../db');

const createNewDog = async ( image, name, heightMin,heightMax, weightMin, weightMax, life_span, temperaments) =>{
    
    const newDog = await Dog.create({
        
        image,
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        temperaments
    });
    
    let temp = await Temperament.findAll({ where: { name: temperaments}})
    
    await newDog.addTemperaments(temp)
    await newDog.reload();

    return newDog
}
module.exports =  createNewDog 