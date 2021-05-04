import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/productos', (req, res) => {
    res.send(data.productos)
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const puerto = process.env.PORT || 5000;

app.listen(puerto, () => {
    console.log(`Serve at http://localhost:${puerto}`);
});