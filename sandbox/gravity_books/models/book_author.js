const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book_author', {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'book',
        key: 'book_id'
      }
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'author',
        key: 'author_id'
      }
    }
  }, {
    sequelize,
    tableName: 'book_author',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_bookauthor",
        unique: true,
        fields: [
          { name: "book_id" },
          { name: "author_id" },
        ]
      },
    ]
  });
};
