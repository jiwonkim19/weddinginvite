'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RSVP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RSVP.init({
    name: DataTypes.STRING,
    rsvp: DataTypes.ENUM('accept', 'decline', 'NULL'),
    food: DataTypes.ENUM('beef', 'chicken', 'fish', 'vegetarian', 'NULL')
  }, {
    sequelize,
    modelName: 'RSVP',
  });
  return RSVP;
};