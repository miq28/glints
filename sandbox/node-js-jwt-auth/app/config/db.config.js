module.exports = {
  HOST: "dbtest.cn50fuyfr3aa.ap-southeast-1.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
