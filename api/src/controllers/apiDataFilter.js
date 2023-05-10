const filterDogsData = (response) =>{
    return response.map(dog =>{
        const [weightMin, weightMax] = dog.weight.metric.split("-");
        const [heightMin, heightMax] = dog.height.metric.split("-");
        return {
            id: dog.id,
            image: dog.image,
            name: dog.name,
            weight: `Min: ${weightMin}kg Max: ${weightMax}Kg`,
            height: `Min: ${heightMin}cm Max: ${heightMax}cm`,
            lifeSpan: dog.lifeSpan
        }
    })
}

module.exports = { filterDogsData }