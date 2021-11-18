const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publisher', {
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    publisher_name: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'publisher',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_publisher",
        unique: true,
        fields: [
          { name: "publisher_id" },
        ]
      },
    ]
  });
};
