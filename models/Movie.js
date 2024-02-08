const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Genre = require("./Genre");
const Actor =require("./Actor");


const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
  },
  plot: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false,
});

Movie.belongsToMany(Genre, { through: 'MovieGenres' });
Genre.belongsToMany(Movie, { through: 'MovieGenres' });

Movie.belongsToMany(Actor, { through: 'MovieActors' });
Actor.belongsToMany(Movie, { through: 'MovieActors' });

module.exports = Movie;






