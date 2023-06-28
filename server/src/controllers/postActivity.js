const { Activity, Country } = require('../db');

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    // Verificar si la actividad ya existe
    if (!name || !difficulty || !duration || !season || !countries) {
      return res.status(400).json("Faltan Datos");
    }
    const existingActivity = await Activity.findOne({
      where: {
        name: name
      }
    });

    if (existingActivity) {
      // Verificar si las relaciones de países ya existen
      const existingCountries = await existingActivity.getCountries({
        where: {
          id: countries
        }
      });

      if (existingCountries.length > 0) {
        return res.status(400).json('Las relaciones de países ya existen para esta actividad');
      }
      // Agregar las nuevas relaciones de países
      const newCountries = await Country.findAll({
        where: {
          id: countries
        }
      });

      await existingActivity.addCountries(newCountries);

      res.status(200).json(existingActivity);
    } else {
      // Crear una nueva actividad y agregar las relaciones de países
      const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season
      });

      const newCountries = await Country.findAll({
        where: {
          id: countries
        }
      });

      await newActivity.addCountries(newCountries);

      res.status(201).json(newActivity);
    }
  } catch (error) {
     res.status(500).json({ message: error.message });
    throw error
  }
};

module.exports = postActivity;
