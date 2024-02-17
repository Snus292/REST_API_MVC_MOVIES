const movieRoutes = require('./movieRoutes');
const genreRoutes = require('./genreRoutes'); 
const actorRoutes = require('./actorRoutes'); 

var express = require('express');
// создание нового марштуризатора Express
var router = express.Router();

/* GET home page. */
// определение маршрута для HTTP GET запроса к корневому URL ("/")
router.get('/', function(req, res, next) {
  //рендеринг(визуазация\отображение) шаблона "index.ejs" c передачей обьекта данных
  // В данном случае, передаем заголовок 'Your Web App'
  res.render('index', { title: 'Express' });
});
router.use('/movies', movieRoutes);
router.use('/genres', genreRoutes);
router.use('/actors', actorRoutes);


module.exports = router;

