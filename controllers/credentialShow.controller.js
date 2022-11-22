const PasswordSchema = require("../models/passwordSchema.model");

class ShowPasswords {

    /** Display results by Division and sort by website name */
    static display(req, res) {

        // get division
        const OUDIVISION = (req.params.data);

        PasswordSchema.where("ouDivision").equals(OUDIVISION).sort('website').then(result => {
            res.send({
                result
            })
        }),
        (error) => {
            res.send(error.message);
        }
    }
}

module.exports = ShowPasswords;