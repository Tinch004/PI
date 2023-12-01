require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://countries_w28j_user:zPPtaKJ4PuAwCC87MYzMuG28uRt9jThP@dpg-cll5kkcjtl8s73f88280-a.oregon-postgres.render.com/countries_w28j`,
  {
    logging: false,
    native: false,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Puede necesitar ajustes en función de su entorno
      },
    },
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: "ActivityCountries" });
Activity.belongsToMany(Country, { through: "ActivityCountries" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
