const { cleanDataTemperaments } = require('./cleanData');
const axios = require('axios');
const { Temperament } = require('../db');
const { URL, API_KEY } = process.env;

const getAllTemperaments = async () =>{
    const databaseTemp = await Temperament.findAll();
    if(data.lenght === 0){
        const apiTemperamentRaw = (await axios.get(`${URL}?apiKey=${API_KEY}`)).data;

        const apiTemperament = cleanDataTemperaments(apiTemperamentRaw);

        const results = await Temperament.bulkCreate(apiTemperament);

        return results;

    }
    return databaseTemp;
}
module.exports = { getAllTemperaments };
