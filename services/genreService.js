// static в методах сервисов означает, что эти методы принадлежат 
// самому классу, а не экземпляру класса. Это позволяет вызывать методы 
// напрямую от класса, без создания объекта этого класса.

const {Sequelize}= require("sequelize");
const {Genre} = require("../models");
const { Op } = Sequelize;

class GenreService{
    static async getAllGenres(){
// Используется метод findAll() модели Genre для получения всех жанров из базы данных
        return Genre.findAll();
    }

    //поиск жанров по названию
    static async getGenresByName(name){
        return Genre.findAll({
            where:{ //объект, который указывает условия для поиска записей
                name:{ //поле в таблице базы данных - название
// используется оператов LIKE для поиска жанров, чьи названия содержат указанное ключевое слова(подстрока)
                    [Op.like]: `%${name}%`
                },
            },
        });
    }
}
module.exports = GenreService;