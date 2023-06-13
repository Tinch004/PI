const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  
    sequelize.define('Country', {
      id: {
        type: DataTypes.STRING(3), // Código de tres letras
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flagImage: {
        type: DataTypes.STRING, // Enlace a la imagen de la bandera
        allowNull: false,
      },
      continents: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      poblation: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  };