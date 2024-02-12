var express = require('express');
// Создаем новый маршрутизатор Express
var router = express.Router();

/* GET users listing. */
// Определяем маршрут для HTTP GET запроса к URL "/users"
router.get('/', function(req, res, next) {
  // Отправляем ответ с текстом 'respond with a resource'
  res.send('respond with a resource');
});

module.exports = router;


// файл используется для  работы с пользователями:
// при добавлении аутентификации, управлением пользователями или 
// другие функции, связанные с пользователями