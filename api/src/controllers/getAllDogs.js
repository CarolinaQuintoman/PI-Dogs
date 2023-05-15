const axios = require('axios');

const { API_KEY, URL } = process.env;
const { Dog } = require('../db');
const  cleanData  = require('../controllers/cleanData')



const getAllDogs = async () =>{
    const databaseDogs = await Dog.findAll();

    const apiDogsRaw = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
    //FALLA 
   
    const apiDogs = cleanData(apiDogsRaw);
    
    const results = [...databaseDogs, ...apiDogs];

    return results
}

module.exports =  getAllDogs ;

