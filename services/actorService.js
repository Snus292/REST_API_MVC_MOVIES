const {Actor}= require("../models");
const { Op } = Sequelize;

class ActorService{
    //получение всех актеров
    static async getAllActors(){
// Используется метод findAll() модели Actor для получения всех актеров из базы данных
        return Actor.findAll();
    }

    //поиск актеров по имени
    static async getActorsByName(name){
        return Actor.findAll({
            where: {
                name:{
//используется оператов LIKE для поиска актеров, чьи имена содержат указанное ключевое слово 
                    [Op.like]: `%${name}%`,
                },
            },
        });
    }
}
module.exports = ActorService;