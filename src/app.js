const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovie } = require("./movie/functions");
const Movie = require("./movie/table");

const app = async (yargsObj) => {
     try {
        await sequelize.sync({alter: true});
        if (yargsObj.add) {
            // add something to movie table
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year});
        } else if (yargsObj.list) {
            // list content of movie table
            console.log(await listMovie());
        } else if (yargsObj.update) {
            // update content of movie table
            await updateMovie({movieObj});
        } else if (yargsObj.delete) {
            // delete entry from movie table
        } else {
            console.log("Incorrect command");
        }
     } catch (error) {
        console.log(error);
     } finally {
        await sequelize.close();
     }
}

app(yargs.argv);