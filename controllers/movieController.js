// controllers/movieController.js
const { MovieService } = require('../services');

// Получение всех фильмов
const getAllMovies = async (req, res) => {
  try {
    // Вызываем сервис для получения всех фильмов из базы данных
    const movies = await MovieService.getAllMovies();
    // Отправляем ответ с массивом фильмов в формате JSON
    res.json(movies);
  } catch (error) {
    // В случае ошибки выводим ее в консоль и отправляем статус 500 с сообщением
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Поиск фильмов по ключевому слову в названии
const getMoviesByKeyword = async (req, res) => {
  // Извлекаем ключевое слово из параметров запроса
  const { keyword } = req.params;
  try {
    // Вызываем сервис для поиска фильмов по ключевому слову
    const movies = await MovieService.getMoviesByKeyword(keyword);
    // Отправляем ответ с результатом поиска в формате JSON
    res.json(movies);
  } catch (error) {
    // В случае ошибки выводим ее в консоль и отправляем статус 500 с сообщением
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Получение фильмов по жанру
const getMoviesByGenre = async (req, res) => {
  // Извлекаем жанр из параметров запроса
  const { genre } = req.params;
  try {
    // Вызываем сервис для получения фильмов по жанру
    const movies = await MovieService.getMoviesByGenre(genre);
    // Отправляем ответ с массивом фильмов в формате JSON
    res.json(movies);
  } catch (error) {
    // В случае ошибки выводим ее в консоль и отправляем статус 500 с сообщением
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Получение фильмов по актеру
const getMoviesByActor = async (req, res) => {
  // Извлекаем имя актера из параметров запроса
  const { actor } = req.params;
  try {
    // Вызываем сервис для получения фильмов по актеру
    const movies = await MovieService.getMoviesByActor(actor);
    // Отправляем ответ с массивом фильмов в формате JSON
    res.json(movies);
  } catch (error) {
    // В случае ошибки выводим ее в консоль и отправляем статус 500 с сообщением
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Получение списка жанров с количеством фильмов в каждом
const getGenresWithMovieCount = async (req, res) => {
  try {//если возникнет ошибка, она обработается в блоке catch
    
    // Вызываем сервис для получения списка жанров с количеством фильмов
// await- метод для ожидания выполнения асинхронной операции
    const genres = await MovieService.getGenresWithMovieCount();
    // Отправляем ответ с результатом в формате JSON
    res.json(genres);
  } catch (error) {
    // В случае ошибки выводим ее в консоль и отправляем статус 500 с сообщением
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllMovies,
  getMoviesByKeyword,
  getMoviesByGenre,
  getMoviesByActor,
  getGenresWithMovieCount,
};
