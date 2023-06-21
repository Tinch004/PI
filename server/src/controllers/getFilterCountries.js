const { Country } = require("../db");
const { Op } = require('sequelize');


const getFilterContinents = async (req, res) => {
  try {
    const { continents } = req.query;

    if (!continents) {
      res.status(400).json({ message: 'El parámetro "continents" es requerido' });
      return;
    }

    const countries = await Country.findAll({
      where: {
        continents: continents
      }
    });

   
      res.status(200).json(countries);

     
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {getFilterContinents}