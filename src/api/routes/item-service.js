const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const checkAuthToken = require('../util/auth-util');

router.get('/', async (req, res) => {
    await checkAuthToken(res, req.query.userId, req.query.token);

    const limit = parseInt(req.query.limit) || 15;
    const skip = parseInt(req.query.skip) || 0;
    const typeFilter = req.query.type;

    const items = await Item.find(typeFilter ? { type: typeFilter } : {})
        .limit(limit)
        .skip(skip);

    res.json(items);
});

router.get('/:id', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.query.userId, req.query.token);

        const id = req.params.id;

        const item = await Item.findById(id);

        res.json(item);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Item not found'
            });
        }

        next(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await checkAuthToken(res, req.query.userId, req.query.token);

        const item = new Item(req.body);

        await item.save();

        return res.json(item);
    } catch (err) {
        return res.status(422).json({
            'error': 'Invalid fields'
        });
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.query.userId, req.query.token);

        const id = req.params.id;

        const item = await Item.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(item);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Item not found'
            });
        }

        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.query.userId, req.query.token);

        const id = req.params.id;

        const item = await Item.findByIdAndDelete(id);

        return res.json(item);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Item not found'
            });
        }

        next(err);
    }
});

module.exports = router;