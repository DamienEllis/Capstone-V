const UserSchema = require("../models/usersSchema.model");
const jwt = require('jsonwebtoken');

/** user login backend */
class LoginUser {

    static login(req, res) {

        // pass and username
        const userEmail = (req.body.email)
        const password = (req.body.password)

        // email must be cooltech email
        if (userEmail.includes("@cooltech.com")) {

            UserSchema.where("email").equals(userEmail).then(result => {
                // user found and password is correct
                if ((result.length > 0) && (result[0].password === password)) {
                    //Create payload and token & send
                    const RESPAYLOAD = {
                        nickname: result[0].nickname,
                        email: result[0].email,
                        role: result[0].role,
                        ouDivision: result[0].ouDivision
                    }

                    // jwt encrypt response payload
                    const TOKEN = jwt.sign(JSON.stringify(RESPAYLOAD), 'jwt-cooltech-secret', {
                        algorithm: 'HS256'
                    })
                    res.send({
                        'token': TOKEN
                    })
                } // login failed
                else {
                    res.status(403).send({
                        'token': "failed"
                    })
                }
            }),
            (error) => {
                res.send(error.message);
            }
        } // not a correct email
        else {
            res.send({
                'token': "failed"
            })
        }
    }
}

module.exports = LoginUser;