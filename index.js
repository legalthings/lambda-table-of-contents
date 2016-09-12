'use strict'

const TOC = require('table-of-contents-json');
const toc = new TOC;

exports.handler = (event, context, callback) => {
    let documents = [];

    if (!event || typeof event !== 'object') {
        return callback('Context must be an object');
    }

    if (!event.html) {
        return callback('Context must contain an "html" property');
    }

    const json = toc.generateJSON(event.html);
    const result = toc.generateHTML(json, event.base);

    callback(null, result);
}
