const {Activity} = require('../db')
const {ActivityCountries} = require('../db')

const postActivity = async (req, res)=>{
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    // Crear la actividad turística en la base de datos
    if(!name||!difficulty||!duration||!season){
        return res.status(400).json("Faltan Datos") 
      }
    const findOne = await Activity.findOne({
      where:{
        name,difficulty,duration,season
      }
    })
    
    if(findOne){
     return res.status(400).json('Ya existe esta actividad')
    }
   

    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    
    });
 
      
     
    if (countries && countries.length > 0) {
      countries.map(async countryId  => {

     
     await ActivityCountries.create({
            CountryId: countryId,
            ActivityId: activity.id
          
       
        });
      });

    }

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports= postActivity