const {ActorService} =require("../services");

//получение всех актером
const getAllActors = async (req,res)=>{
    try{
        //вызов сервиса для получения всех актеров из базы данных
        const actors= await ActorService.getAllActors();
        //отправка ответа с массивом актеров в формате JSON
        res.jso(actors);
    }catch(error){
        //в случае ошибки вывожим ее в консоль  иотправляем статус 500 с смс
        console.error(500).send("Internal Server Error");
    }
};

//получение фильмов с участием определенного актера
const getMoviesByActor=async(req,res)=>{
    //извлекаем имя актера из параметров запроса
    const {actor}= req.params;
    try{ //если возникнет ошибка, она обработается в блоке catch

        //вызов сервиса для получения фильмов с участие определенноого актера
// await- метод для ожидания выполнения асинхронной операции
        const movies =await ActorService.getMoviesByActor(actor);
        //отправка ответа с массивом фильмаов в формате JSON
        res.json(movies);
    }catch(error){
        // в случае ошибки идет вывод ее в консоль и отправка статуса 500с смс
        console.status(500).send("Internal Server Error");
    }
};
// await- метод для ожидания выполнения асинхронной операции

module.exports= {
    getAllActors,
    getMoviesByActor,
};