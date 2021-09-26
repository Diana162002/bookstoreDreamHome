module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        _id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            default: shortid.generate,
        },
        id_user: {  type: Sequelize.INTEGER  },
        id_book: {  type: Sequelize.INTEGER  },
    });
    return Order;
};