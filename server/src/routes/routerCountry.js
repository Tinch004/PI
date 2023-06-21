const { Router } = require("express");
const router = Router();
const getAllCountries = require ('../handlers/countriesHandler')
const getCountryById = require('../controllers/getCountryById')
const getCountryByName = require('../controllers/getCountryByName')
const {getFilterContinents} = require ('../controllers/getFilterCountries')




router.get('/', getAllCountries)

router.get('/name', getCountryByName)

router.get('/:id', getCountryById)

router.get('/filterContinents',getFilterContinents)

module.exports = router;

 