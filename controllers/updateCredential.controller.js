const PasswordSchema = require("../models/passwordSchema.model");

class EditPassword {

    /** Update username & password by its id */
    static update(req, res) {

        // get put body details
        const userID = (req.body.id)
        const userTitle = (req.body.title)
        const username = (req.body.username)
        const userWebsite = (req.body.website)
        const userPassword = (req.body.password)
        const userEmail = (req.body.email)
        
        // update the record
        PasswordSchema.findByIdAndUpdate(userID, {
            $set: {
                title: userTitle,
                website: userWebsite,
                createdBy: userEmail,
                username: username,
                password: userPassword,
            }
        }).then(result => {
                res.send(result);
            },
            (error) => {
                res.send(error.message);
            }
        )
    }
}

module.exports = EditPassword;