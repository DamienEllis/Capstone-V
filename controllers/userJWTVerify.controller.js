const jwt = require('jsonwebtoken');


class VerifyUser {

    /** ensures users validity */
    static verify(req, res) {

        // split the token
        const token = req.headers['authorization'].split(' ')[1]

        try {

            // decode the token
            const DECODED = jwt.verify(token, 'jwt-cooltech-secret')

            // respond with details
            res.send({
                'nickname': DECODED.nickname,
                'email': DECODED.email,
                'ouDivision': DECODED.ouDivision,
                'role': DECODED.role,
            })

        } catch (e) {
            /** catch 401 status */
            res.sendStatus(401)
        }

    }
}

module.exports = VerifyUser;