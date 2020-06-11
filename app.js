const argv = require("./config/yargs").argv;
const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

const dir = argv.d;

// getLugarLatLng(argv.d)
//   .then((info) => console.log(info) )
//   .catch((err) => {
//     throw new Error(`No existe la ciudad identificada como ${argv.d}`);
//   });

// getClima(info.lat, info.lng)
//       .then((res) => console.log(res))
//       .catch((err) => console.log("error del servidor"))

const getInfo = async (dir) => {
  try {
    const getCoordenadas = await getLugarLatLng(dir);
    const getTemp = await getClima(getCoordenadas.lat, getCoordenadas.lng);

    console.log(`La temperatura de ${getCoordenadas.direccion} es de ${getTemp}`);

  } catch (error) {
    console.log(`No se pudo determinar la tempreatura de ${dir}`);
  }
};

getInfo(dir);
