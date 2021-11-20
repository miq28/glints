const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address_status', {
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    address_status: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'address_status',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_addr_status",
        unique: true,
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
