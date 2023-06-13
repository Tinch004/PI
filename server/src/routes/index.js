const { Router } = require("express");

const routerCountry = require('./routerCountry')
const routerActivity = require('./routerActivity')
const router = Router();


// ------------------------------- Aca van las dos rutas -------------------------------

router.use('/countries', routerCountry)
router.use('/activities', routerActivity)


module.exports = router;
