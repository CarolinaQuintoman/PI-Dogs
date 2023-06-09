const  createNewDog  = require('../controllers/createNewDog')

const createDogHandler = async( req, res) =>{
   try {
      const { image,name, heightMax, heightMin, weightMin, weightMax, life_span, temperaments } = req.body;

      const newDog = await createNewDog(
            
            image,            
            name,
            heightMin,
            heightMax,
            weightMin, 
            weightMax, 
            life_span,
            temperaments            
            )
        res.status(200).json(newDog)
     } catch (error) {
        res.status(400).json({error: error.message})
     }
}
module.exports = createDogHandler;