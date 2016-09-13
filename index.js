'use strict'

const TOC = require('table-of-contents-json');
const toc = new TOC;

exports.handler = (event, context, callback) => {
    if (!event || typeof event !== 'string') {
        return callback('Context must be a string');
    }

    if (event.indexOf('[ table of contents ]') === -1) {
        return callback('Context must contain a "[ table of contents ]" placeholder');
    }

    const json = toc.generateJSON(event);
    const result = toc.generateHTML(json, event);

    callback(null, result);
}
