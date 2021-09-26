module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      phone: { type: Sequelize.STRING  },
      login : { type: Sequelize.STRING  },
      email : { type: Sequelize.STRING  },
      pass : { type: Sequelize.STRING }
    });
    return User;
  };