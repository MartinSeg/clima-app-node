const axios = require("axios");
const API_KEY = require("../constants");

const getClima = async( lat, lng ) => {

    const req = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    return(req.data.main.temp)
}

module.exports = {
    getClima
}



//   api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}