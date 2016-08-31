'use strict'

const TOC = require('table-of-contents-json');
const toc = new TOC;

exports.handler = (event, context, callback) => {
    let documents = [];

    if (!event || typeof event !== 'string') {
        return callback('Context must be a string');
    }

    const json = toc.generateJSON(event);
    const result = toc.generateHTML(json);

    callback(null, result);
}
