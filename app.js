const express = require('express');
const app = express('');
const path = require('path');

const staticFiles = express.static(path.join(__dirname, '/Public'));
app.use(staticFiles);

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log('Corriendo');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});
