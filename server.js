'use strict';

const express = require('express');


const port = process.env.PORT;

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const VERSION = process.env.VERSION;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello RBC !!!!!!!  VERSION ${VERSION} ');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');