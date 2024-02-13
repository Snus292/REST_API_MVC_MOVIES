//деструктуризация объекта { MovieService } и вызов функции require который загружает модуль, расположенный по указанному пути
const {MovieService} = require("../services");

//получение всех фильмов
const getAllMovies = async (req,res) => {
    try{
        // Вызов сервиса для получения всех фильмов из БД
        const movies = await MovieService.getAllMovies();
        // отправка ответа с массивом фильмов в формате JSON
        res.json(movies);
    }catch(error){
        // в случае ошибки идет вывод ее в консоль и отправляется статус 500 с сообщением
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

// поиск фильмов по ключевому слову в названии
const getMoviesByKeyword = async(req,res)=> {
    // извлечение ключевого слова  из параметров запроса
    const {keyword}= req.params;
    try{
        //вызов сервис для посиска фильмов по кл. слову
        const movies = await MovieService.getMoviesByKeyword(keyword);
        //отправка ответа с результатом поиска в формате JSON
        res.json(movies);
    }catch(error){
        //в случае ошибки идет вывод ее в консоль и отправка статуса 500 с смс
        console.error(error);
        res.status(500).send("Internal Server Error");
    } 
};

//получение фильмов по жанру
const getMoviesByGenre =async(req,res)=>{
    //извлечение жанра из параметров запроса
    const {genre}= req.params;
    try{
        // вызов сервиса для получения фильмов по жанру
        const movies =await MovieService.getMoviesByGenre(genre);
        //отправлка ответа с массивом фильмов в формате JSON
        res.json(movies);
    } catch(error){
        //в случае ошибки выводим ее в консоль и отправляет статус 500 с смс
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

//получение фильмов по жанру
const getMoviesByActor = async(req,res)=>{
    //извлечение имени актера из параметров запроса
    const {actor}= req.params;
    try{
// вызов сервиса для получегия фильмов по актеру
        const movies = await MovieService.getMoviesByActor(actor);
        //отправляем ответ с массивом фильмов в формате JSON
        res.json(movies);
    } catch(error){
        //в случае ошибки выводим ее в консоль и отправляем сратус 500 с смс
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

//получения списака жанров с кол-вом фильмов в каждом жанре
const getGenresWithMovieCount = async(req,res) => {
    try{
        //вызов сервиса для получения списка жанров с кол-вом фильмов
        const genres = await MovieService.getGenresWithMovieCount();
        // отправака ответа с рез в формате JSON 
        res.json(genres);
    }catch (error){
        //в случае ошибки выводим ее в консоль и отправляем статус 500 с смс
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getAllMovies,
    getMoviesByActor,
    getMoviesByKeyword,
    getMoviesByGenre,
    getGenresWithMovieCount,
}