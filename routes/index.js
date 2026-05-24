// routes/index.js
const express = require('express');
const index = express.Router();

// Route: Halaman Home (/)
index.get('/', (req, res) => {
    res.render('index');
});

// Export index agar bisa dipakai di app.js
module.exports = index;