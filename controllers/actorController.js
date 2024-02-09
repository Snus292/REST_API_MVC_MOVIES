const {ActorService} =require("../services");

//получение всех актером
const getAllActors = async (req,res)=>{
    try{
        //вызов сервиса для получения всех актеров из базы данных
        const actors= await ActorService.getAllActors();
        //отправка ответа с массивом актеров в формате JSON
    }
}