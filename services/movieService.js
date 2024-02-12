const { Sequelize } = require("../models");
const {Op}= Sequelize;
const{Movie}= require("../models");

class MovieService {
    // получение всех фильмов
    static async getAllMovies(){
// используется метов findAll() модели Movie для получения всех фильмов из БД
        return Movie.findAll();
    }

  // Поиск фильмов по ключевому слову в названии
    static async getMoviesByKeyword(keyword){
        return Movie.findAll({
            where:{ //объект, который указывает условия для поиска записей
                title:{//поле в таблице базы данных - заголовок
// Используется оператор LIKE для поиска жанров, чьи названия содержат указанное ключевое слово(подстрока)
                    [Op.like]: `%${keyword}%`,
                },
            },
        });
    }

    //получение фильмов по жанру
    static async getMoviesByGenre(genre){
        return Movie.findAll({
            where: {
                genres: {
// Используется оператор CONTAINS для поиска фильмов, принадлежащих определенному жанру
                    [Op.contains]: [genre],
                },
            },
        });
    }

    //получение фильмов по актеру
    static async getMoviesByActor(actor){
        return Movie.findAll({
            where:{
                actors:{
// Используется оператор CONTAINS для поиска фильмов, в которых участвует определенный актер
                    [Op.contains]: [actor],
                },
            },
        });
    }

    //получение списка жанров с кол-вом фильмов в каджом жанре
    static async getGenresWithMovieCount(){

        //используется метод aggregate() модели Movie для получения списка 
        // уникальных жанров с кол-вом фильмов в каждом
        return Movie.aggregate("genres","DISTINCT",{plan: false})

// aggregate() - метод Sequelize, используемый для выполнения агрегаций 
// (например, суммирования, подсчета, нахождения уникальных значений и т.д.) в базе данных.

// 'DISTINCT' - указание на выполнение агрегации для уникальных значений. 
// В данном случае, мы хотим получить уникальные значения жанров.

// { plain: false } - опции, указывающие, что мы не хотим, чтобы Sequelize 
// возвращало результат в виде "плоского" объекта, а в виде массива результатов.

// Результат: [{ genres: ['Action'], count: 15 },{ genres: ['Drama'], count: 10 },]
    }
}

module.exports =MovieService;