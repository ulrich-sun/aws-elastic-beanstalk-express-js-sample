const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello from Masterclass on Friday 31/07/2025!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
