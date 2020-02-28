const sqlite = require("sqlite");
const initializeDB = async () => {
    try {
        const db = await sqlite.open("./db.sqlite");
        return db;
    }
    catch (error) {
        throw error;
    }
}

class AuthenticationController {

    async usernameExists(username) {
        try {
            const db = await initializeDB();
            const stmt = await db.all(`SELECT count(username) FROM users WHERE username = '${username}'`);
            const yesNo = stmt[0]['count(username)'];
            if (yesNo === 1) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            throw error;
        }
    }

    async getPasswordOfUserWith(username) {
        try {
            const db = await initializeDB();
            const stmt = await db.all(`SELECT password FROM users WHERE username = '${username}'`);
            const pass = stmt[0]['password'];
            return pass;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = AuthenticationController;