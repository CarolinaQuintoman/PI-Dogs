import { GET_DOGS, GET_ALL_TEMPS, GET_DOG_DETAIL, ORDER, GET_DOGS_BY_NAME, GET_NAME } from "./types";

const initialState = {
    dogs: [],
    temperaments: [],
    dogDetail: {},
    allDogsOrder: [],
    
}

const rootReducer = (state= initialState, action) =>{
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
        
        case ORDER:
            const allDogsCopy = [...state.dogs]
            return {
                ...state,
                dogs : action.payload === 'Ascendente'
                ? allDogsCopy.sort((a,b) => a.name.localeCompare(b.name))
                : allDogsCopy.sort((a,b) => b.name.localeCompare(a.name))
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
        default:
            return { ...state}
    }
    
}

export default rootReducer;