const cleanData = (array) =>
     array.map( (dog) =>{
        const [weightMin, weightMax] = dog.weight.metric.split(" - ");
        const [heightMin, heightMax] = dog.height.metric.split(" - ");
        return{
            id: dog.id,
            image: dog.image,
            name: dog.name,
            weight: `Min: ${weightMin}kg Max: ${weightMax}Kg`,
            height: `Min: ${heightMin}cm Max: ${heightMax}cm`,
            life_span: dog.life_span,
            //created: false,
        }
    });

    const cleanDataTemperaments = (array) =>{
        const data = array.map( (dog) => {
            return { temperaments: dog.temperaments}
        });
        return data
        .map(obj => obj.temperament)
        .filter(temperaments => temperaments !== null)
        .map(temperaments => temperaments.split(", "))
        .flat()
        .map((temperament) => ({name: temperament.trim()}))
        .filter((temperament, index, self) => index === self.findIndex((t) => t.name === temperament.name))
    }


module.exports = { cleanData, cleanDataTemperaments};