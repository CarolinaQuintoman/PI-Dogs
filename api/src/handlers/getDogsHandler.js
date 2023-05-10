const letrasRegex = /^[A-Za-z]+$/;

const getDogsHandler = async( req, res) =>{
    
    const { name } = req.query;
    if(name) res.send(`quiero buscar todos los que se llamen ${name}`);
    else res.send("quiero enviar todos los usuarios");
    
    
}
module.exports = getDogsHandler;