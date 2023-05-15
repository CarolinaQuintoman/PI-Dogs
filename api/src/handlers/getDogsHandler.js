const  getAllDogs  = require('../controllers/getAllDogs');
const  searchDogByName  = require('../controllers/searchDogByName');


const getDogsHandler = async( req, res) =>{
    const { name } = req.query;
    try {
        const results = (name && /^[A-Za-z\s]+$/.test(name)) 
        ? await searchDogByName(name) 
        : await getAllDogs();
    
        res.status(200).json(results);
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
module.exports = getDogsHandler;