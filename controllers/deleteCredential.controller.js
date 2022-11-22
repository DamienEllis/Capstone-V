const PasswordSchema = require("../models/passwordSchema.model");

class DeletePassword {

    /** Delete credentials bu userID */
    static delete(req, res) {

        // get the userid
        const USERID = (req.body.id)

        PasswordSchema.findByIdAndDelete(USERID)
            .then(result => {
                res.send(result);
            },
            (error) => {
                res.send(error.message);
            }
        )
    }
}

module.exports = DeletePassword;