![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

# M38Sequelize

This project was undertaken as part of a coding bootcamp, and was an introduction to relational databases, and libraries that allowed a connection to them.

## Installation

After cloning the repository to your local machine, open a terminal and run `npm install` to install the dependancies. Following this, create a new file in the root folder `.env`. Inside of this, copy and paste this line

> MYSQL_URI = (YOUR SQL URI HERE)

## Using this app

Every command should be run from the terminal, with you being scoped into the root folder. They will all begin with `node src/app.js`

### Parameters

- `--add --title="A Movie" (Optional: --actor="An actor's name") `
  > This command inserts a new record into the database, the parameter `--title` cannot be skipped, as the table REQUIRES it.
- `--list (e.g. node src/app.js --list)`
  > This command lists the records in the Movie database.
- `--update --newTitle "A Movie" (--newActor "An Actor") --oldTitle "A movie already on the list" (--oldActor "An actor thats already on the list")`
  > This command allows the user to update a movie with new parameters, with optional title/actor fields.
- `--delete "A Movie already on the list"`
  > This command allows the user to delete a single movie that matches the title they provide.
