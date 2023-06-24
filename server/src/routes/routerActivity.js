const { Router } = require("express");
const router = Router();
const postActivity = require('../controllers/postActivity')
const getAllActivities= require('../controllers/getAllActivities')
const getActivitiesCountries = require('../controllers/getActivitiesCountries')


router.get('/',getAllActivities)
router.post('/',postActivity)
router.get('/activitiesCountries', getActivitiesCountries )



module.exports= router
