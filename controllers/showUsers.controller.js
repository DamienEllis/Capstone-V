const UserSchema = require("../models/usersSchema.model");

class DisplayUsers {

    /** show all the users */ 
    static display(req, res) {

        UserSchema.find().sort('email')
            .then(result => {
                res.send({
                    result
                })
            }),
            (error) => {
                res.send(error.message);
            }
    }
}

module.exports = DisplayUsers;