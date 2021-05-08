const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 15;
        const skip = parseInt(req.query.skip) || 0;
        const nameFilter = req.query.name;

        const users = await User.find(nameFilter ? { name: nameFilter } : {}).limit(limit).skip(skip);

        res.json(users);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await User.findById(id);

        res.json(user);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'User not found'
            });
        }

        next(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        return res.json(user);
    } catch (err) {
        return res.status(422).json({
            'error': 'Invalid fields'
        });
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await User.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(user);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'User not found'
            });
        }

        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await User.findByIdAndDelete(id);

        return res.json(user);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'User not found'
            });
        }

        next(err);
    }
});

module.exports = router;