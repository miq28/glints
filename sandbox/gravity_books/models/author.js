const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('author', {
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    author_name: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'author',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_author",
        unique: true,
        fields: [
          { name: "author_id" },
        ]
      },
    ]
  });
};
