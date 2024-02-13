'use strict';

const { Model } = require('sequelize');
const db = require('./index');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
        Genre.belongsToMany(models.Movie, { through: 'MovieGenres' });
    }
  }
  Genre.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Genre',
      timestamps: false,
    }
  );
  return Genre;
};
