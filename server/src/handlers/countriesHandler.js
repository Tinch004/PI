const {getCountriesApi} = require('../controllers/getCountries')

const getAllCountries = async (req, res) => {
  try {
    const countryApi = await getCountriesApi();
   

    res.status(200).json(countryApi);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllCountries;
