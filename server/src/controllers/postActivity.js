const {Activity} = require('../db')
const {Country} = require('../db')


const postActivity = async (req, res)=>{
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    // Crear la actividad turística en la base de datos
    if(!name||!difficulty||!duration||!season|!countries){
        return res.status(400).json("Faltan Datos") 
      }
    const findOne = await Activity.findOne({
      where:{
        name,difficulty,duration,season
      },
     
    })

    if(findOne){
     return res.status(400).json('Ya existe esta actividad')
    }



const countryPromises = countries.map(async (id)=> {

  const countryMatch = await Country.findOne({where:{id}})

  return countryMatch
})
const matchedCountries = await Promise.all(countryPromises)

console.log(matchedCountries );
    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    
    });
 
      
     
    if (countries && countries.length > 0) {


      await activity.addCountry(matchedCountries.map((country)=>country.id))


    }

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports= postActivity