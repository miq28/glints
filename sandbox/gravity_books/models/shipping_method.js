const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_method', {
    method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    method_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shipping_method',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_shipmethod",
        unique: true,
        fields: [
          { name: "method_id" },
        ]
      },
    ]
  });
};
