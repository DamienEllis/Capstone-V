const PasswordSchema = require("../models/passwordSchema.model");

class AddPassword {

    /** Create a username & password document */
    static create(req, res) {

        // Get entered params in the body
        const userEmail = (req.body.email)
        const userOuDivision = (req.body.ouDivision)
        const userTitle = (req.body.title)
        const userWebsite = (req.body.website)
        const username = (req.body.username)
        const userPassword = (req.body.password)

        // Create user credentials
        const userCredentials = new PasswordSchema({
            ouDivision: userOuDivision,
            title: userTitle,
            website: userWebsite,
            createdBy: userEmail,
            username: username,
            password: userPassword,
            archive: false
        })
        userCredentials.save(function (err, data) {
            if (err) {
                res.status(500).send({
                    message: "Oops! This is awkward. An unexpected error occurred"
                });
            } else {
                res.send(data)
            }
        })
    }
}

module.exports = AddPassword;