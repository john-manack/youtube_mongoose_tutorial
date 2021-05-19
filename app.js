'use strict';

const express = require('express'),
    app = express();

const mongoose = require('mongoose');

require('dotenv/config');

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log('Connected to DB')
);

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import Routes
const rootRoute = require('./routes/index');
const postsRoute = require('./routes/posts');
app.use('/', rootRoute);
app.use('/posts', postsRoute);

// Server Listening on port 3000
app.listen(3000);