const { Dog, Temperament } = require('../db');
const { getAllTemperaments } = require('./getAllTemperaments');
const { Op } = require('sequelize');

const createNewDog = async (id, image, name, heightMin,heightMax, weightMin, weightMax, life_span, temperaments) =>{
    
    const newDog = await Dog.create({
        id,
        image,
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
    
    });
    
    let temp = await Temperament.findAll({ where: { name: temperaments}})
    await newDog.addTemperament(temp)

    return newDog
}
module.exports = { createNewDog }