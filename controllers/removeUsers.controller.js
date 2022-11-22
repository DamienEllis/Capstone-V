const UserSchema = require("../models/usersSchema.model");

class DeleteUser {

    /** Delete a user */
    static delete(req, res) {

        // Get entered params in the body
        const ID = (req.body.id)

        UserSchema.findByIdAndDelete(ID)
            .then(result => {
                    res.send(result);
                },
                (error) => {
                    res.send(error.message);
                }
            )
    }
}

module.exports = DeleteUser;