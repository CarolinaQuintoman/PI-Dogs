import { GET_DOGS, GET_ALL_TEMPS } from "./types";

const initialState = {
    dogs: [],
    temperaments: [],
    dogDetail: {},
    allDogs : [],
    currentPage: 1,
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
        
        default:
            return { ...state}
    }
}

export default rootReducer;