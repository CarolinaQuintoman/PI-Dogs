
const axios = require('axios');
const { Temperament } = require('../db');
const { URL, API_KEY } = process.env;

const getAllTemperaments = async () =>{
    
    
    const allData = await axios.get(`${URL}?apiKey=${API_KEY}`);
    
    let allTemperaments = allData.data
    .map((dog) => (dog.temperament ? dog.temperament : "No info"))
    .map((dog) => dog?.split(", "));

    let oneTemperament = [...new Set(allTemperaments.flat())];
    oneTemperament.forEach((element) => {
    if (element) {
        Temperament.findOrCreate({
        where: { name: element },
        });
    }
    });
    oneTemperament = await Temperament.findAll();
    return oneTemperament;

}
module.exports =  getAllTemperaments ;
