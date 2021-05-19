const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the sample mongoDB API' });
})

module.exports = router;