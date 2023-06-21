const {DataTypes} = require('sequelize')

module.exports=(sequelize)=>{

    sequelize.define('Activity', {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false

          },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        difficulty: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
            max: 5,
          },
        },
        duration: {
          type: DataTypes.INTEGER,
          allowNull: true,
        }, 
        season: {
          type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
          allowNull: false,
        },
      });
    };
