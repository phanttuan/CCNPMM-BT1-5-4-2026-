'use strict';

const mongoose = require('mongoose');

// ----- MySQL (Sequelize) -----
// const { Model } = require('sequelize');
//
// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // định nghĩa mối quan hệ
//         }
//     }
//
//     User.init({
//         email: DataTypes.STRING,
//         password: DataTypes.STRING,
//         firstName: DataTypes.STRING,
//         lastName: DataTypes.STRING,
//         address: DataTypes.STRING,
//         phoneNumber: DataTypes.STRING,
//         gender: DataTypes.BOOLEAN,
//         image: DataTypes.STRING,
//         roleId: DataTypes.STRING,
//         positionId: DataTypes.STRING
//     }, {
//         sequelize,
//         modelName: 'User',
//     });
//
//     return User;
// };

// ----- MongoDB (Mongoose) -----
const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        address: String,
        phoneNumber: String,
        gender: Boolean,
        image: String,
        roleId: String,
        positionId: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);