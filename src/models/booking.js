'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    flightid: {
      type:DataTypes.INTEGER,
      allowNull:false},
    userid: {
      type:DataTypes.INTEGER,
      allowNull:false},
    status: {
      type:DataTypes.ENUM('PROCESSING','BOOKED','CANCELLED'),
      defaultValue:'PROCESSING'},
    totalCost: {
      type:DataTypes.INTEGER,
      allowNull:false},
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};