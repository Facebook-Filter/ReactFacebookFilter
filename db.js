const sqlite= require("sqlite");

const initializeDB = async () => {
    const db = await sqlite.open("./db.sqlite");







}


module.exports= initializeDB;