const express = require('express');
const router = express.Router();
const Region = require('../models/region');
const checkAuthToken = require('../util/auth-util');

router.get('/', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const limit = parseInt(req.query.limit) || 15;
        const skip = parseInt(req.query.skip) || 0;
        const nameFilter = req.query.name;

        const regions = await Region.find(nameFilter ? { name: nameFilter } : {})
            .limit(limit)
            .skip(skip);

        res.json(regions);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const id = req.params.id;

        const region = await Region.findById(id);

        res.json(region);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Region not found'
            });
        }

        next(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const region = new Region(req.body);

        await region.save();

        return res.json(region);
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

        const region = await Region.findByIdAndUpdate(id, req.body, { new: true });

        return res.json(region);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Region not found'
            });
        }

        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await checkAuthToken(res, req.headers.authorization);

        const id = req.params.id;

        const region = await Region.findByIdAndDelete(id);

        return res.json(region);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(404).json({
                'error': 'Region not found'
            });
        }

        next(err);
    }
});

module.exports = router;