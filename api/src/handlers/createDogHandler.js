const { createNewDog } = require('../controllers/createNewDog')

const createDogHandler = async( req, res) =>{
     try {
        const { id, image,name, height, weightMin, weightMax, averageWeight, life_span } = req.body
        const newDog = await createNewDog(
            id,
            name,
            image,            
            height,
            weightMin, 
            weightMax, 
            averageWeight, 
            life_span)
        res.status(200).json(newDog)
     } catch (error) {
        res.status(400).json({error: error.message})
     }
}
module.exports = createDogHandler;