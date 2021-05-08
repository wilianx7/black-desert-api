const express = require('express');
const router = express.Router();
const Auth = require('../models/auth');

router.post('/', async (req, res) => {
    try {
        req.body.token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

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