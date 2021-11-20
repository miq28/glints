const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_status', {
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_value: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_status',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_orderstatus",
        unique: true,
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
