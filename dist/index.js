"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const twitter_1 = require("./twitter");
const sentiment_1 = require("./sentiment");
const PORT = process.env.PORT || 5000;
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
const app = express();
app
    .use(allowCrossDomain)
    .get('/', (req, res) => {
    res.send({ message: 'hello, world!' });
})
    .get('/search/:term', (req, res) => {
    const searchTerm = req.params.term;
    res.header['Access-Control-Allow-Origin'] = '*';
    res.header['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE';
    res.header['Access-Control-Allow-Headers'] = 'Content-Type';
    console.log('Searching for', searchTerm);
    twitter_1.default(searchTerm)
        .then((results) => (sentiment_1.default(results.data.statuses)
        .on('response', (response) => {
        response.headers['Access-Control-Allow-Origin'] = '*';
    })
        .pipe(res)));
})
    .listen(PORT, () => console.log('Listening on port 5000'));
//# sourceMappingURL=index.js.map