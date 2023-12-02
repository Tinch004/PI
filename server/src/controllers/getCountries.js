const axios = require("axios");
const {Country} = require('../db');

const getCountriesApi = async (req, res) => {
  try {
    const dataApi = (await axios.get("http://localhost:5000/countries")).data;

    const countries = await Promise.all(
      dataApi.map(async (pais) => {
        const country = {
          id: pais.cca3,
          name: pais.name.common,
          flagImage: pais.flags.png?pais.flags.png:'Sin Bandera',
          continents: pais.continents[0],
          capital: pais.capital ? pais.capital[0] : "No tiene capital",
          subregion: pais.subregion,
          area: pais.area ? pais.area : "no tiene area",
          population: pais.population,
        };
        Country.findOrCreate({
                   
          where:{

              id: pais.cca3,
          },

          defaults: {
              
            name: pais.name.common,
            flagImage: pais.flags.png?pais.flags.png:'Sin Bandera',
            continents: pais.continents[0],
            capital: pais.capital ? pais.capital[0] : "No tiene capital",
            subregion: pais.subregion,
            area: pais.area ? pais.area : "no tiene area",
            population: pais.population,
          }

      }
      )

        return country;
      })
    );



    return countries;

  } catch (error) {
    throw Error('error al hacer peticion a la api')
  }
};

module.exports = {getCountriesApi};
