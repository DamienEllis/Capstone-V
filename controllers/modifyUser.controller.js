const UserSchema = require("../models/usersSchema.model");

class UserEdit {

    /** Update user info through userid */
    static update(req, res) {

        // get user details
        const ID = (req.body.id)
        const userEmail = (req.body.email)
        const userNickname = (req.body.nickname)
        const userPassword = (req.body.password)
        const ouDivision = (req.body.ouDivision)
        const userRole = (req.body.role)

        UserSchema.findByIdAndUpdate(ID, {
            $set: {
                nickname: userNickname,
                email: userEmail,
                password: userPassword,
                ouDivision: ouDivision,
                role: userRole
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

module.exports = UserEdit;