const UserSchema = require("../models/usersSchema.model");
const jwt = require('jsonwebtoken');

class RegisterNewUser {

    /** create user */
    static create(req, res) {

        // Get user details
        const userEmail = (req.body.email)
        const ouDivision = (req.body.ouDivision)
        const userNickname = (req.body.nickname)
        const userPassword = (req.body.password)
        
        // only allow "@cooltech.com" emails
        if (userEmail.includes("@cooltech.com")) {

            UserSchema.where("email").equals(userEmail)
                .then(result => {
                    // if user does not exist, add
                    if (result.length === 0) {

                        const registerUser = new UserSchema({
                            email: userEmail,
                            nickname: userNickname,
                            password: userPassword,
                            role: "normal",
                            ouDivision: ouDivision,
                            archive: false
                        })

                        registerUser.save(function (err, data) {
                            if (err) {
                                res.status(500).send({
                                    message: "Oops! This is awkward. Error creating the new User."
                                });
                            } else {
                                let payload = {
                                    nickname: userNickname,
                                    email: userEmail,
                                    role: "normal",
                                    ouDivision: [ouDivision]
                                }
                                const token = jwt.sign(JSON.stringify(payload), 'jwt-cooltech-secret', {
                                    algorithm: 'HS256'
                                })
                                res.send({
                                    'token': token
                                })
                            }
                        })

                    } // email already exists 
                    else {
                        res.send({
                            'token': "already registered"
                        })
                    }
                }),
                (error) => {
                    res.send(error.message);
                }
        } else {
            res.send({
                'token': "failed"
            })
        }
    }
}

module.exports = RegisterNewUser;