const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the template engine and use layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');
app.use(ejsLayouts);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
