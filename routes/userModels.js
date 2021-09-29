module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("Author", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };