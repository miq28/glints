const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book_language', {
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    language_code: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    language_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'book_language',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_language",
        unique: true,
        fields: [
          { name: "language_id" },
        ]
      },
    ]
  });
};
