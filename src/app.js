const yargs = require('yargs');
const { sequelize } = require('./db/connection.js');
const { addMovie, listMovies, updateMovies, deleteMovie } = require('./movie/functions.js');

const app = async (yargsObj) => {
    try {
        await sequelize.sync({alter: true});
        if(yargsObj.add) {
            await addMovie({title:yargsObj.title,actor:yargsObj.actor,rating:yargsObj.rating});
        } else if(yargsObj.list) {
            await listMovies();
        } else if(yargsObj.update) {
            await updateMovies({title:yargsObj.newTitle,actor:yargsObj.newActor},{where:{title:yargsObj.oldTitle}});
        } else if(yargsObj.delete) {
            await deleteMovie({where:{title:yargsObj.delete}});
        } else {console.log("wrong input");}
    } catch (error) {
        console.log(error);
    } finally{
        await sequelize.close();
    }
}

app(yargs.argv);