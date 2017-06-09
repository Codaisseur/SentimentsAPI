"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('request');
const { AZURE_API_KEY } = process.env;
exports.default = (tweets) => {
    const headers = {
        'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    const documents = tweets.map((tweet) => ({
        language: 'en',
        id: tweet.id,
        text: tweet.text,
    }));
    return request
        .post({
        uri: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
        headers,
        body: JSON.stringify({ documents }),
    });
};
//# sourceMappingURL=sentiment.js.map