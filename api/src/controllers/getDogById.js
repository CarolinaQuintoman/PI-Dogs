const axios = require("axios");
const { Dog } = require("../db");
const { API_KEY, URL } = process.env;

const getDogById = async (id, source) => {
  const dog =
    source === "api"
      ? (await axios.get(`${URL}/${id}?${API_KEY}`)).data
      : await Dog.findByPk(id);

  return dog;
};
module.exports = getDogById;
