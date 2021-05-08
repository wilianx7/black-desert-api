const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const regionServiceRoutes = require('./api/routes/region-service');
const characterServiceRoutes = require('./api/routes/character-service');
const itemServiceRoutes = require('./api/routes/item-service');
const userServiceRoutes = require('./api/routes/user-service');
const authServiceRoutes = require('./api/routes/auth-service');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

app.use('/regions', regionServiceRoutes);

app.use('/characters', characterServiceRoutes);

app.use('/items', itemServiceRoutes);

app.use('/users', userServiceRoutes);

app.use('/auth', authServiceRoutes);

app.use((err, req, res, next) => {
    return res.status(500).json({
        err: err.message
    });
});

app.listen(8000);