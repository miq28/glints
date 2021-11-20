const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cust_order', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customer',
        key: 'customer_id'
      }
    },
    shipping_method_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shipping_method',
        key: 'method_id'
      }
    },
    dest_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'address',
        key: 'address_id'
      }
    }
  }, {
    sequelize,
    tableName: 'cust_order',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_custorder",
        unique: true,
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
