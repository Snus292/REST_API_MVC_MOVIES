'use strict';


const { Genre } = require('./Genre');
const { Actor } = require('./Actor');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        static associate(models) {
            Movie.belongsToMany(models.Genre, { through: 'MovieGenres',timestamps: false });
            Movie.belongsToMany(models.Actor, { through: 'MovieActors',timestamps: false });
        }
    }
    Movie.init(
        {
          title: {
            type: DataTypes.STRING, // Проверьте эту строку
            allowNull: false,
          },
          releaseYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          plot: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
        },
        {
          sequelize,
          modelName: 'Movie',
          timestamps: false,
        }
    );
    return Movie;
};

