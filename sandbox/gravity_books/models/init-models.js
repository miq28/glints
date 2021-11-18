var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _address_status = require("./address_status");
var _author = require("./author");
var _book = require("./book");
var _book_author = require("./book_author");
var _book_language = require("./book_language");
var _country = require("./country");
var _cust_order = require("./cust_order");
var _customer = require("./customer");
var _customer_address = require("./customer_address");
var _order_history = require("./order_history");
var _order_line = require("./order_line");
var _order_status = require("./order_status");
var _publisher = require("./publisher");
var _shipping_method = require("./shipping_method");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var address_status = _address_status(sequelize, DataTypes);
  var author = _author(sequelize, DataTypes);
  var book = _book(sequelize, DataTypes);
  var book_author = _book_author(sequelize, DataTypes);
  var book_language = _book_language(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var cust_order = _cust_order(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var customer_address = _customer_address(sequelize, DataTypes);
  var order_history = _order_history(sequelize, DataTypes);
  var order_line = _order_line(sequelize, DataTypes);
  var order_status = _order_status(sequelize, DataTypes);
  var publisher = _publisher(sequelize, DataTypes);
  var shipping_method = _shipping_method(sequelize, DataTypes);

  address.belongsToMany(customer, { as: 'customer_id_customers', through: customer_address, foreignKey: "address_id", otherKey: "customer_id" });
  author.belongsToMany(book, { as: 'book_id_books', through: book_author, foreignKey: "author_id", otherKey: "book_id" });
  book.belongsToMany(author, { as: 'author_id_authors', through: book_author, foreignKey: "book_id", otherKey: "author_id" });
  customer.belongsToMany(address, { as: 'address_id_addresses', through: customer_address, foreignKey: "customer_id", otherKey: "address_id" });
  cust_order.belongsTo(address, { as: "dest_address", foreignKey: "dest_address_id"});
  address.hasMany(cust_order, { as: "cust_orders", foreignKey: "dest_address_id"});
  customer_address.belongsTo(address, { as: "address", foreignKey: "address_id"});
  address.hasMany(customer_address, { as: "customer_addresses", foreignKey: "address_id"});
  book_author.belongsTo(author, { as: "author", foreignKey: "author_id"});
  author.hasMany(book_author, { as: "book_authors", foreignKey: "author_id"});
  book_author.belongsTo(book, { as: "book", foreignKey: "book_id"});
  book.hasMany(book_author, { as: "book_authors", foreignKey: "book_id"});
  order_line.belongsTo(book, { as: "book", foreignKey: "book_id"});
  book.hasMany(order_line, { as: "order_lines", foreignKey: "book_id"});
  book.belongsTo(book_language, { as: "language", foreignKey: "language_id"});
  book_language.hasMany(book, { as: "books", foreignKey: "language_id"});
  address.belongsTo(country, { as: "country", foreignKey: "country_id"});
  country.hasMany(address, { as: "addresses", foreignKey: "country_id"});
  order_history.belongsTo(cust_order, { as: "order", foreignKey: "order_id"});
  cust_order.hasMany(order_history, { as: "order_histories", foreignKey: "order_id"});
  order_line.belongsTo(cust_order, { as: "order", foreignKey: "order_id"});
  cust_order.hasMany(order_line, { as: "order_lines", foreignKey: "order_id"});
  cust_order.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(cust_order, { as: "cust_orders", foreignKey: "customer_id"});
  customer_address.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(customer_address, { as: "customer_addresses", foreignKey: "customer_id"});
  order_history.belongsTo(order_status, { as: "status", foreignKey: "status_id"});
  order_status.hasMany(order_history, { as: "order_histories", foreignKey: "status_id"});
  book.belongsTo(publisher, { as: "publisher", foreignKey: "publisher_id"});
  publisher.hasMany(book, { as: "books", foreignKey: "publisher_id"});
  cust_order.belongsTo(shipping_method, { as: "shipping_method", foreignKey: "shipping_method_id"});
  shipping_method.hasMany(cust_order, { as: "cust_orders", foreignKey: "shipping_method_id"});

  return {
    address,
    address_status,
    author,
    book,
    book_author,
    book_language,
    country,
    cust_order,
    customer,
    customer_address,
    order_history,
    order_line,
    order_status,
    publisher,
    shipping_method,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
