//подключение модуля Express
const express = require("express");
//создание обьекта маршрутизатора Express
const router = express.Router();
//подключение контроллера для модели actor
const actorController = require("../controllers/actorController");


//получение всех актеров
router.get("/", actorController.getAllActors);

// /получение фильмов с участием определенного актера
router.get("/movies/:actor", actorController.getMoviesByActor);

module.exports = router;