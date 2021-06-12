const express = require('express');
const router = express.Router();
const Character = require('../models/character');
const checkAuthToken = require('../util/auth-util');

router.get('/', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const limit = parseInt(req.query.limit) || 15;
        const skip = parseInt(req.query.skip) || 0;
        const nameFilter = req.query.name;

        const characters = await Character.find(nameFilter ? { name: nameFilter } : {})
            .populate('originRegion')
            .populate('items')
            .limit(limit)
            .skip(skip);

        res.json(characters);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const id = req.params.id;

        const character = await Character.findById(id)
            .populate('originRegion')
            .populate('items');

        res.json(character);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Character not found'
            });
        }

        next(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const character = new Character(req.body);

        await character.save();

        return res.json(character);
    } catch (err) {
        return res.status(422).json({
            'error': 'Invalid fields'
        });
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const id = req.params.id;

        const character = await Character.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(character);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Character not found'
            });
        }

        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const id = req.params.id;

        const character = await Character.findByIdAndDelete(id);

        return res.json(character);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Character not found'
            });
        }

        next(err);
    }
});

module.exports = router;