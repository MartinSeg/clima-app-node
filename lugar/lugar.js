const axios = require("axios");
const API_KEY = require("../constants");

const getLugarLatLng = async (dir) => {
  const encodedURL = encodeURI(dir);
  
  const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedURL}&appid=${API_KEY}`,
  });

  const resp = await instance.get();

  const lat = resp.data.coord.lat;
  const lng = resp.data.coord.lon;
  const direccion = resp.data.name

  return {direccion, lat, lng};
};

module.exports = {
  getLugarLatLng,
};
