const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book', {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    isbn13: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'book_language',
        key: 'language_id'
      }
    },
    num_pages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    publication_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'publisher',
        key: 'publisher_id'
      }
    }
  }, {
    sequelize,
    tableName: 'book',
    schema: 'public',
    timestamps: false,
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: '[object Object]',
    indexes: [
      {
        name: "pk_book",
        unique: true,
        fields: [
          { name: "book_id" },
        ]
      },
    ]
  });
};
