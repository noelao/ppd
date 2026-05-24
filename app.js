const express = require('express');
const path = require('path');
const app = express();

// Set EJS sebagai template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sajikan file statis (untuk gambar template)
app.use(express.static(path.join(__dirname, 'public')));

// Mock Data Template
const templates = [
    { id: 'drake', name: 'Drake Hotline Bling', image: '/img/drake.jpg' },
    { id: 'distracted', name: 'Distracted Boyfriend', image: '/img/distracted.jpg' }
];

// Route: Halaman Home
app.get('/', (req, res) => {
    res.render('index', { templates });
});

// Route: Halaman Edit
app.get('/edit/:id', (req, res) => {
    const template = templates.find(t => t.id === req.params.id);
    if (!template) return res.status(404).send('Template tidak ditemukan');
    res.render('edit', { template });
});

// Export untuk Vercel, listen untuk local development
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));

module.exports = app;