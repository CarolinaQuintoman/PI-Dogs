const axios = require('axios');
const { Dog } = require('../db');
const  cleanData  = require('../controllers/cleanData');
const { URL, API_KEY } = process.env;

const searchDogByName = async (name) =>{
    const databaseDogs = await Dog.findAll({where: {name:name}});

    const apiDogsRaw = (await axios.get(`${URL}?apiKey=${API_KEY}`)).data;

    const apiDogs = cleanData(apiDogsRaw); 
    const filteredApi = apiDogs.filter((dogs) => 
         dogs.name === name)
    return [...filteredApi, ...databaseDogs]
}

module.exports =  searchDogByName ;