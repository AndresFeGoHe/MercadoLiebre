const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => (
    res.sendFile(path.join(__dirname, "views", "home.html"))
    ))
app.get('/login', (req, res) => (
        res.sendFile(path.join(__dirname, "views", "login.html"))
    ))
app.get('/registro', (req, res) => (
        res.sendFile(path.join(__dirname, "views", "registro.html"))
    ))

app.listen(port, () => {
        console.log("Servidor corriendo en el puerto " + 3000);
        console.log("http://localhost:" + port)
    });
