const { getAllTemperaments } = require('../controllers/getAllTemperaments')


const getTemperamentsHandler = async( req, res) =>{
    try {
      const results = await getAllTemperaments()

      res.status(200).json(results);
    } catch (error) {
        res.status(404).json({ error: error.message})
    }
    res.send("temperaments")
}
module.exports = getTemperamentsHandler;