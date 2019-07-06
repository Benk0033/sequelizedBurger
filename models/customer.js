'use strict';
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        customer_name: DataTypes.STRING
    }, {});
    Customer.associate = function (models) {
        // associations can be defined here
        Customer.hasMany(models.Burger, {
            onDelete: "cascade"
        });

    };
    return Customer;
};