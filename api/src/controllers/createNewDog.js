const { Dog } = require('../db')

const createNewDog = async (id, image,name, height, weightMin, weightMax, averageWeight, life_span) =>{
    const newDog = await Dog.create({
        id,
        image,
        name, 
        height,
        weightMin, 
        weightMax, 
        averageWeight, 
        life_span
    });
    return newDog
}
module.exports = { createNewDog }