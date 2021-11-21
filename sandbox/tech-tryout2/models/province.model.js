module.exports = (sequelize, Sequelize) => {
    const Province = sequelize.define("province", {
      // id: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true
      // },
      name: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  
    return Province;
  };