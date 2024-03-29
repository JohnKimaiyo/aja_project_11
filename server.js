const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Router } = require('express');
const cors = require('./router');

const hostname = '127.0.0.1';
const port = 3001;

// configure bodyparser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodedParser);

// configure cors
app.use(cors());

// configure the router

app.use('/api', router)

// get
app.get('/', (request, response) => {
    response.send(`<h2>Welcome to express server of employee portal </h2>`);
});

app.listen(port, hostname, () => {
    console.log(`express server is started at http://${hostname}:${port}`)
});
