// services/importDataService.js

// Подключаем необходимые модели из папки models
const { Movie, Genre, Actor } = require('../models'); // Укажите правильные пути к вашим моделям

// Асинхронная функция для импорта данных
async function importData() {
  try {
    // Загружаем данные из JSON-файла
    const jsonData = require('../movies.json'); // Укажите правильный путь к вашему файлу

    // Проходимся по каждому объекту в JSON-данных
    for (const movieData of jsonData) {
      // Создаем запись фильма в таблице Movie
      const movie = await Movie.create({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        plot: movieData.plot,
      });

      // Обработка жанров
      for (const genreName of movieData.genres) {
        // Поиск или создание записи жанра
        const [genre] = await Genre.findOrCreate({ where: { name: genreName } });
        // Связываем фильм с жанром
        await movie.addGenre(genre);
      }

      // Обработка актеров
      for (const actorName of movieData.actors) {
        // Поиск или создание записи актера
        const [actor] = await Actor.findOrCreate({ where: { name: actorName } });
        // Связываем фильм с актером
        await movie.addActor(actor);
      }
    }

    // Вывод сообщения об успешном импорте в консоль
    console.log('Data imported successfully');
  } catch (error) {
    // Вывод ошибки в консоль при возникновении ошибки
    console.error('Error importing data:', error);
  }
}

// Экспортируем функцию импорта данных для использования в других частях проекта
module.exports = { importData };
