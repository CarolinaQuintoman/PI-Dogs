const axios = require('axios');
const { Dog } = require('../db');
const  {cleanData, cleanDataApi}  = require('../controllers/cleanData')

const { API_KEY, URL } = process.env;



const getAllDogs = async () =>{
    
    const databaseDogs = await Dog.findAll();
     console.log(databaseDogs);
    const apiDogsRaw = (await axios.get(`${URL}?${API_KEY}`)).data;
    
    const apiDogs = cleanData(apiDogsRaw);
    const dataDogs = cleanDataApi(databaseDogs)
    const results = [...dataDogs, ...apiDogs];

    return results
}

module.exports =  getAllDogs ;

