const express = require('express');
const router = express.Router();
const Auth = require('../models/auth');
const User = require('../models/user');

router.post('/', async (req, res) => {
    try {
        req.body.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        const users = await User.find({ login: req.body.login, password: req.body.password });

        if (users?.length) {
            req.body.user = users[0].id;
        }

        const auth = new Auth(req.body);

        await auth.save();

        return res.json(auth);
    } catch (err) {
        return res.status(422).json({
            'error': 'Invalid fields'
        });
    }
});

module.exports = router;