const { Router } = require("express");
const router = Router();
const getAllCountries = require ('../handlers/countriesHandler')
const getCountryById = require('../controllers/getCountryById')
const getCountryByName = require('../controllers/getCountryByName')





router.get('/', getAllCountries)

router.get('/name', getCountryByName)

router.get('/:id', getCountryById)

module.exports = router;

 