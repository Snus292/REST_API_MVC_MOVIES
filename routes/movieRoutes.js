//подключение модуля Express
const express = require("express");
//создание обьекта маршрутизатора Express
const router = express.Router();
//подключение контроллера для модели movie
const movieController = require("../controllers/movieController");


//получение всех фильмов
router.get("/",movieController.getAllMovies);

//поиск фильмов по ключевому слову в названии
router.get("/:keyword",movieController.getMoviesByKeyword);

// получение фильмов по жанру
router.get("/genre/:genre",movieController.getMoviesByGenre);

//получение фильмов по актеру
router.get("/actor/:actor", movieController.getMoviesByActor);

//получение списка жанров с кол-вом фильмов в каждом
router.get("/genres",movieController.getGenresWithMovieCount);

module.exports = router;