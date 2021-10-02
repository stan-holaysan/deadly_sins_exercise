const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require('../models/user');

exports.register = async (req, res) => {
    let salt= bcrypt.genSaltSync(saltRounds);
    let pass= bcrypt.hashSync(req.body.password, salt);
    let ret = await User.model.create({
        username: req.body.username,
        password: pass
    })

    return ret
}