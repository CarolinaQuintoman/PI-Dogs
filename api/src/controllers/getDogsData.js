const axios = require('axios');
const { API_KEY, URL } = process.env;
const { Dog } = require('../db')

// me traigo la data de la api
const getDogsData = async () => {
    try {
        
        let apiData = await axios.get(`https://${URL}?api_key=${API_KEY}`);

        const dogs = await apiData.data.map()
            
        
            
        

    } catch (error) {
        return {error: error.message}
    }
};

const dogsApiData = async () =>{
    try {
        const allDogs = await getDogsData();
        const saveAllDogs = await Dog.bulkCreate(allDogs)
    } catch (error) {
        return { error: error.message }
    }
}

module.exports = {
    dogsApiData
};