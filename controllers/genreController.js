const {GenreService} =require("../services");

//получение всех жанров
const getAllGenres =async (req,res)=>{
    try{
        //вызов сервиса для получения всех жанров из  бд
        const genres=await GenreService.getAllGenres();
        //отправка ответа с массивом жанров формате JSON
        res.json(genres);
    }catch(error){
        //вслучае ошибки идет вывод ее в консоль и отправка статуса 500 с смс
        console.error(error);
        res.status(500).send("Internal Server Error");

    }
};

//получениефильмов по определенному жанру
const getMoviesByGenre =async (req,res)=>{
    //извлечение жанра из параметровзапроса
    const {genre}= req.params;
    try{//если возникнет ошибка, она обработается в блоке catch

        //вызов сервис для получения фильмов по определенному жанру
// await- метод для ожидания выполнения асинхронной операции       
        const movies=await GenreServise.getMoviesByGenre(genre);
        // отправляем ответ с массивом фильмов в формате JSON
        res.json(movies);
    }catch(error){
        // в случае ошибки выводим ее в консоль и отправляем статус 500 смс
        consol.error(error);
        res.status(500).send("Internal Server Error");

    }
};
module.exports={
    getAllGenres,
    getMoviesByGenre
};