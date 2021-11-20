const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'customer_id'
      }
    },
    staff_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'staff',
        key: 'staff_id'
      }
    },
    rental_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rental',
        key: 'rental_id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment',
    schema: 'public',
    timestamps: false,
    additional: '[object Object]',
    indexes: [
      {
        name: "idx_fk_customer_id",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "idx_fk_rental_id",
        fields: [
          { name: "rental_id" },
        ]
      },
      {
        name: "idx_fk_staff_id",
        fields: [
          { name: "staff_id" },
        ]
      },
      {
        name: "payment_pkey",
        unique: true,
        fields: [
          { name: "payment_id" },
        ]
      },
    ]
  });
};
