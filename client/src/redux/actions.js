import axios from 'axios';
import { GET_DOGS, GET_DOG } from './types';



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

export const getDog = (id) =>{
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/dogs/${id}`)
        const dog = apiData.data;
        dispatch({type: GET_DOG, payload: dog });
    };
};