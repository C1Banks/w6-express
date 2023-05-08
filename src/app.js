const express = require('express');
const app = express();

app.use("/static", express.static('public'));

app.get('/', (request, response) => {
    response.send(`This is a ${request.method} method`);
})

module.exports = app;