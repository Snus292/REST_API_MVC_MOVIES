const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Actor = sequelize.define("Actor",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: false,
});
 module.exports = Actor;

 