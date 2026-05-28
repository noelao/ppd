// routes/index.js
const express = require('express');
const template = express.Router();

template.get('/', (req, res) => {
    res.render('index');
});

template.get('/viaLink', (req, res) => {
    res.render('templates/viaLink'); 
});
template.get('/tempelWm', (req, res) => {
    res.render('templates/tempelWm'); 
});

module.exports = template;