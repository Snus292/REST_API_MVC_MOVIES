'use strict';

const { Model } = require('sequelize');
const db = require('./index');

module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    static associate(models) {
        Actor.belongsToMany(models.Movie, { through: 'MovieActors',timestamps: false });
    }
  }
  Actor.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Actor',
      timestamps: false,
    }
  );
  return Actor;
};
