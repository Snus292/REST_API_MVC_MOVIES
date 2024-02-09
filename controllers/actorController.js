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
    try{
        //вызов сервиса для получения фильмов с участие определенноого актера
        const movies =await ActorService.getMoviesByActor(actor);
        //отправка ответа с массивом фильмаов в формате JSON
        res.json(movies);
    }
}