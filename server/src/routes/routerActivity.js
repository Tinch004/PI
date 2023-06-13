const { Router } = require("express");
const router = Router();
const postActivity = require('../controllers/postActivity')
const getAllActivities= require('../controllers/getAllActivities')


router.get('/',getAllActivities)
router.post('/',postActivity)



module.exports= router
