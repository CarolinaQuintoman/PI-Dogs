import {
  GET_DOGS,
  GET_ALL_TEMPS,
  GET_DOG_DETAIL,
  GET_DOGS_BY_NAME,
  GET_NAME,
  ORDER_DOG,
  FILTER_BY_WEIGHT,
  GET_FILTER_TEMP,
  FILTER_BY_ORIGIN,
  GET_USER_CREATED_DOGS,
  GET_API_DOGS,
} from "./types";

const initialState = {
  dogs: [],
  temperaments: [],
  dogDetail: {},
  allDogsOrder: [],
  allDogs: [],
  userCreatedDogs: [],
  apiDogs: [],
  ascendente: [],
  filterTemperament: [],
  orderWeight: []
  
};

const rootReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        ascendente: action.payload,
        filterTemperament: action.payload,
        orderWeight: action.payload
      };
    case GET_ALL_TEMPS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        dogDetail: action.payload,
      };

    case ORDER_DOG:
      const allDogsCopy = [...state.dogs];
      return {
        ...state,
        dogs:
          action.payload === "A-Z"
            ? allDogsCopy.sort((a, b) => a.name.localeCompare(b.name))
            : allDogsCopy.sort((a, b) => b.name.localeCompare(a.name)),
      };
    case FILTER_BY_WEIGHT:
      let aux = [...state.orderWeight];

      if (action.payload === "Descendente") {
        aux = aux.sort((a, b) => {
          const weightA = a.promedio;
          const weightB = b.promedio;
          return weightB - weightA;
        });
      } else if (action.payload === "Ascendente") {
        aux = aux.sort((a, b) => {
          const weightA = a.promedio;
          const weightB = b.promedio;
          return weightA - weightB;
        });
      }
      

      return {
        ...state,
        dogs: aux,
      };

    case GET_DOGS_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_NAME:
      let name =
        action.payload === ""
          ? state.allDogs
          : state.dogs.filter((inst) =>
              inst.name.toLowerCase().includes(action.payload.toLowerCase())
            );
      return {
        ...state,
        dogs: name,
      };

    case FILTER_BY_ORIGIN:
      let filteredOrigin;
      if (action.payload === "All") {
        filteredOrigin = state.ascendente;
      } else if (action.payload === "api") {
        filteredOrigin = state.ascendente.filter(
          (inst) => inst.created === "api"
        );
      } else if (action.payload === "bdd") {
        filteredOrigin = state.ascendente.filter(
          (inst) => inst.created !== "api"
        );
      }
      return {
        ...state,
        dogs: filteredOrigin,
      };

    case GET_FILTER_TEMP:
      const filterTemp =
        action.payload === "All"
          ? state.filterTemperament
          : state.filterTemperament?.filter((dog) =>
              dog.temperaments?.split(", ").includes(action.payload)
            );

      return {
        ...state,
        dogs: filterTemp,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
