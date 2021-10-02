'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../db_connection');


const User = connection.sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});


exports.model = User;