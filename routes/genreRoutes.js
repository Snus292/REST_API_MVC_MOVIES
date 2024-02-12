//подключение модуля Express
const express = require("express");
//создание обьекта маршрутизатора Express
const router = express.Router();
// подключение контроллера для модели genre
const genreController = require("../controllers/genreController");


//получение всех жанров
router.get("/", genreController.getAllGenres);

// /получение фильмов по жанру
router.get("/movies/:genre", genreController.getMoviesByGenre);

module.exports = router;