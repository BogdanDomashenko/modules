
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes.js');

const User = require('./models/UserModel.js');

mongoose.connect('mongodb://localhost/users_db');

routes(app);
app.listen(port);