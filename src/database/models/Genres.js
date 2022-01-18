module.exports=(sequelize, dataTypes) =>{
    let alias = "Generos";
    let cols = {

    };
    let config = {
        tableName: "genres"
    }

    const Genres = sequelize.define(alias, cols, config);
}