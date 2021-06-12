const Auth = require('../models/auth');

async function checkAuthToken(res, token) {
    return new Promise(async (resolve) => {
        if (!token) {
            return res.status(401).json({
                err: 'Unathorized'
            });
        }

        try {
            const auth = await Auth.find({ token: token });

            if (!auth.length) {
                return res.status(401).json({
                    err: 'Unathorized'
                });
            }

            resolve(true);
        } catch (err) {
            return res.status(401).json({
                err: 'Unathorized'
            });
        }
    });
}

module.exports = checkAuthToken;