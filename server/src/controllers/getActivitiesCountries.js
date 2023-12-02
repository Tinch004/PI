const { ActivityCountries } = require("../db");

const getActivityCountries = async (req, res) => {
  try {
    const activitiesCountries = await ActivityCountries.findAll();

    res.status(200).json(activitiesCountries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getActivityCountries;
