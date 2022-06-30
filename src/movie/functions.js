const yargs = require("yargs");
const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log("Movie added Successfully");
    } catch (error) {
        console.log(error);
    }
};

exports.listMovie = async (movieObj) => {
    try {
        const response = await Movie.findAll(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (movieObj, yargsObj) => {
	try {
		// Example parameters:
		// criteria: { title: "Testing Title" }
		// updates: { title: "New Testing Title", actor: "John Doe", year: "2020" }

		const response = await Movie.update(movieObj) 
            {
                where: {
                    yargsObj.title, yargsObj.actor, yargsObj.year
                }
            };
        console.log(response);
	} catch (error) {
		console.log(error);
	}
};