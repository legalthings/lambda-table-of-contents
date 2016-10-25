 'use strict'

const TOC = require('table-of-contents-json');
const toc = new TOC;

exports.handler = (event, context, callback) => {
    if (!event && !event.html) {
        return callback('No event received');
    }

    if (event.html.indexOf('[ table of contents ]') === -1) {
        return callback('Context must contain a "[ table of contents ]" placeholder');
    }

    const json = toc.generateJSON(event.html, event.options);
    const result = toc.generateHTML(json, event.html, event.options);

    callback(null, result);
}
