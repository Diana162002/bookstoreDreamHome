const shortid = require("shortid");

module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
        _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            default: shortid.generate,
        },
        title: { type: Sequelize.STRING  },
        genre: { type: Sequelize.STRING  },
        autor: { type: Sequelize.STRING  },

        description: { type: Sequelize.String },
        image: { type: Sequelize.String },
        price: { type: Sequelize.Number },
        availableLanguage: { type: Sequelize.JSON },
   
    });
    return Book;
};