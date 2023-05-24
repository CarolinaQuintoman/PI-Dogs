import { GET_DOGS, GET_ALL_TEMPS, GET_DOG_DETAIL, GET_DOGS_BY_NAME, GET_NAME, ORDER_DOG, FILTER_BY_WEIGHT, GET_FILTER_TEMP, FILTER_BY_ORIGIN } from "./types";

const initialState = {
    dogs: [],
    temperaments: [],
    dogDetail: {},
    allDogsOrder: [],
    allDogs: []
    

    
}

const rootReducer = (state= initialState, action) =>{
    let aux = [];
    switch (action.type){
        case GET_DOGS:
            return {
                ...state, 
                dogs: action.payload
            }
        case GET_ALL_TEMPS:
            return {
                ...state,
                temperaments: action.payload,
            }
        case GET_DOG_DETAIL:
            return {
                
                dogDetail: action.payload,
            }    
        
        case ORDER_DOG:
            const allDogsCopy = [...state.allDogsOrder, ...state.dogs]
            return {
                ...state,
                dogs : 
                action.payload === 'A-Z'
                ? allDogsCopy.sort((a,b) => a.name.localeCompare(b.name))
                : allDogsCopy.sort((a,b) => b.name.localeCompare(a.name))
            }
            case FILTER_BY_WEIGHT: 
            if (action.payload === "min") {
                aux = state.dogs.sort((dogA, dogB) => {
                    if(dogA.weightMin < dogB.weightMin) return -1;
                    if(dogA.weightMin > dogB.weightMin) return 1;
                    return 0;
                })
            } else if (action.payload === "max") {
                aux = state.dogs.sort((dogA, dogB) => {
                    if(dogA.weightMax > dogB.weightMax) return -1;
                    if(dogA.weightMax < dogB.weightMax) return 1;
                    return 0;
                })
            } else if (action.payload === "ave"){
                aux = state.dogs.sort((dogA, dogB) => {
                    if(dogA.averageWeight < dogB.averageWeight) return -1;
                    if(dogA.averageWeight > dogB.averageWeight) return 1;
                    return 0;
                })
            } else if (action.payload === "ave-max"){
                aux = state.dogs.sort((dogA, dogB) => {
                    if(dogA.averageWeight > dogB.averageWeight) return -1;
                    if(dogA.averageWeight < dogB.averageWeight) return 1;
                    return 0;
                })
            } else {
                console.log("error")
            }

            return{
                ...state,
                dogs: aux
            }

        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_NAME:
            let name = action.payload === "" ? state.allDogs : state.dogs.filter(inst => inst.name.toLowerCase().includes(action.payload.toLowerCase()))
            return{
                ...state,
                dogs: name
        }   
        case FILTER_BY_ORIGIN:
            const origin = action.payload === "" 
                            ? state.allDogs 
                            : state.dogs.filter(ori => ori.origin.toLowerCase().includes(action.payload.toLowerCase()));
            
            return {
                ...state,
                dogs: origin
            };
      

      
        case GET_FILTER_TEMP:
            let choiceTemps = 
            action.payload === "All"
            ? state.allDogsOrder
            : state.dogs.filter((dog) =>{
                if(!dog.temperaments) return undefined;
                else return dog.temperament.split(", ").includes(action.payload)
            })
            return{
                ...state,
                dogs: choiceTemps
            }
        

      



        default:
            return { ...state}
    }
    
}

export default rootReducer;



// const comparisonFunctions = {
//     min: (dogA, dogB) => dogA.weightMin - dogB.weightMin,
//     max: (dogA, dogB) => dogB.weightMax - dogA.weightMax,
//     ave: (dogA, dogB) => dogA.averageWeight - dogB.averageWeight,
//     "ave-max": (dogA, dogB) => dogB.averageWeight - dogA.averageWeight,
//   };
            
//     if (comparisonFunctions.hasOwnProperty(action.payload)) {
//       const comparisonFn = comparisonFunctions[action.payload];
//       const sortedDogs = state.dogs.sort(comparisonFn);
  
//       return {
//         ...state,
//         dogs: sortedDogs,
//       };
//     } else {
//       console.log("error");
//       return state;
//     }