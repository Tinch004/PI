const axios = require ('axios')

const {Country} = require('../db');



const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;


    const countryById = await Country.findOne({
      where: {
        id: id
      }
    });

    if (countryById) {
      res.status(200).json(countryById);
    } else {
      res.status(404).json({ message: 'País no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCountryById