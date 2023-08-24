const cleanData = (array) =>
     array.map( (dog) =>{
        const [weightMin, weightMax] = dog.weight.metric.split(" - ");
        const [heightMin, heightMax] = dog.height.metric.split(" - ");
        const promedio = (weightMax + weightMin)/2
        return{
            id: dog.id,
            image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
            name: dog.name,
            weight: `Min: ${weightMin}kg Max: ${weightMax}Kg`,
            height: `Min: ${heightMin}cm Max: ${heightMax}cm`,
            life_span: dog.life_span,
            created: "api",
            temperaments: dog.temperament,
            promedio: promedio
        }
    });

const cleanDataApi = (array) =>
array.map( (dog) =>{
    
    const promedio = (dog.weightMax + dog.weightMin)/2
    return{
        id: dog.id,
        image: dog.image,
        name: dog.name,
        weight: `Min: ${dog.weightMin}kg Max: ${dog.weightMax}Kg`,
        height: `Min: ${dog.heightMin}cm Max: ${dog.heightMax}cm`,
        life_span: dog.life_span,
        created: "bdd",
        temperaments: dog.temperament,
        promedio: promedio
    }
});
    

module.exports = {cleanData, cleanDataApi};