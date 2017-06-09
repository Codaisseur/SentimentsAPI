"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const twitter_1 = require("./twitter");
const sentiment_1 = require("./sentiment");
const app = express();
app
    .get('/search/:term', (req, res) => {
    const searchTerm = req.params.term;
    console.log('Searching for', searchTerm);
    twitter_1.default(searchTerm)
        .then((results) => (sentiment_1.default(results.data.statuses)
        .pipe(res)));
})
    .listen(5000, () => console.log('Listening on port 5000'));
//# sourceMappingURL=index.js.map