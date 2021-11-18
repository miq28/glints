'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Edition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * 
     */
     
    static associate(models) {
      // define association here
    }
  };
  Edition.init({
    isbn: {
      type: DataTypes.TEXT,
      primaryKey: true
    },
    book_id: DataTypes.INTEGER,
    edition: DataTypes.INTEGER,
    publisher_id: DataTypes.INTEGER,
    publication: DataTypes.DATE,
    type: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'edition',
  });
  return Edition;
};