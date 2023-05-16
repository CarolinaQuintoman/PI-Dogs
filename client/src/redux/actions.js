import axios from 'axios';
import { GET_DOGS, GET_ALL_TEMPS} from './types';



export const getDogs = () =>{
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/dogs");
        const dogs = apiData.data;
        dispatch({ 
            type: GET_DOGS,
            payload: dogs,
        })
    }
};

export const getAllTemperaments = () =>{
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/temperaments")
        const listAllTemperaments = apiData.data.map(temp => temp.name);
        dispatch({
            type: GET_ALL_TEMPS,
             payload: listAllTemperaments
         });
    };
};

