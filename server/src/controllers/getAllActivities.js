const { Activity } = require("../db").default;

const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getAllActivities;
