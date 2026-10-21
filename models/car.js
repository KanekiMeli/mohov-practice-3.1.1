const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Car = sequelize.define(
  'Car',
  {
    brand: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER },
    price: { type: DataTypes.FLOAT },
    isAvailable: { type: DataTypes.BOOLEAN, defaultValue: true },
  },
  { tableName: 'cars' }
);

module.exports = Car;