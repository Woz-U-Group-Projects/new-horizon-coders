"use strict";
module.exports = (sequelize, DataTypes) => {
    const Signup = sequelize.define(
        "Signup",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }
    );
    Signup.associate = function(models) {
        //
    };
    return Signup;
};