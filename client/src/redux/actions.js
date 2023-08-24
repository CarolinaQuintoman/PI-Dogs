import axios from "axios";
import {
  GET_DOGS,
  GET_ALL_TEMPS,
  GET_DOG_DETAIL,
  GET_NAME,
  GET_DOGS_BY_NAME,
  ORDER_DOG,
  FILTER_BY_WEIGHT,
  GET_FILTER_TEMP,
  FILTER_BY_ORIGIN,
} from "./types";
//
export const getDogs =  () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/dogs");
    console.log(apiData);
    const dogs = apiData.data;
    dispatch({
      type: GET_DOGS,
      payload: dogs,
    });
  };
};

export const getAllTemperaments = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/temperaments");
    const listAllTemperaments = apiData.data.map((temp) => temp.name);
    dispatch({
      type: GET_ALL_TEMPS,
      payload: listAllTemperaments,
    });
  };
};

export const getDogDetail = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/dogs/${id}`);

    dispatch({
      type: GET_DOG_DETAIL,
      payload: apiData.data,
    });
  };
};

export const orderDogs = (order) => {
  return {
    type: ORDER_DOG,
    payload: order,
  };
};
export const orderByWeight = (filterWeight) => {
  return {
    type: FILTER_BY_WEIGHT,
    payload: filterWeight,
  };
};

export const getDogsByName = (name) => {
  return async function (dispatch) {
    let apiData = await axios(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({
      type: GET_DOGS_BY_NAME,
      payload: apiData.data,
    });
  };
};

export const getName = (name) => {
  return {
    type: GET_NAME,
    payload: name,
  };
};

export const filterByTemperament = (temper) => {
  return {
    type: GET_FILTER_TEMP,
    payload: temper,
  };
};

export const filterByOrigin = (origin) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload: origin,
  };
};
