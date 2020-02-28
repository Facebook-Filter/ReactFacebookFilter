const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Private = require('../Private');

class Login {
    constructor(userCredentials) {
        this.username = userCredentials.username;
        this.password = userCredentials.password;
    }

    async userValidation(controller) {
        try {
            const usernameExists = await controller.usernameExists(this.username);
            if (usernameExists)
                return true;
            else {
                throw new Error(`that's not the correct username`);
            }

        }
        catch (error) {
            throw error;

        }
    }

    passwordIsValid() {
        return true;
    }

    async passwordComparison(controller) {
        try {
            const passwordFromDatabase = await controller.getPasswordOfUserWith(this.username);
            const pass = this.password;

            let promise = new Promise(function (resolve, reject) {
                bcrypt.compare(pass, passwordFromDatabase, function (err, result) {
                    if (result) {
                        resolve(true);
                    } else {
                        reject(new Error("passwords don't match"));
                    }
                });
            });

            return promise.then(value => {
                return true;
            }).catch(err => {
                throw err;
            })

        } catch (error) {
            throw error;
        }
    }

    getJWT() {
        const Token = jwt.sign({ username: this.username }, Private.key, { expiresIn: '1h' });
        return Token;
    }

    async loginUser(controller) {
        try {
            const userValidation = await this.userValidation(controller);
            if (userValidation && this.passwordIsValid()) {
                try {
                    const passwordValidation = await this.passwordComparison(controller);
                    if (passwordValidation) {
                        return this.getJWT();
                    }
                }
                catch (error) {
                    throw error;
                }
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Login;