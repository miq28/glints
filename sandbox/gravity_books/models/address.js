const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    street_number: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    street_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'country',
        key: 'country_id'
      }
    }
  }, {
    sequelize,
    tableName: 'address',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_address",
        unique: true,
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
};
