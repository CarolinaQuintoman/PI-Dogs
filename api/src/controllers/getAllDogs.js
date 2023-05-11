const axios = require('axios');
const { API_KEY, URL } = process.env;
const { Dog } = require('../db');
const { cleanData } = require('../controllers/cleanData')



const getAllDogs = async () =>{
    const databaseDogs = await Dog.findAll();

    const apiDogsRaw = (await axios.get(`${URL}?apiKey=${API_KEY}`)).data;

    const apiDogs = cleanData(apiDogsRaw);
    
    const results = [...databaseDogs, ...apiDogs];

    return results
}

module.exports = { getAllDogs };

//`${URL}?${API_KEY}` "https://api.thedogapi.com/v1/breeds"