'use strict';

var $Raven = void 0;

if (process.env.isBrowser) {
    $Raven = require('raven-js');
} else {
    $Raven = {
        captureException: function captureException() {}
    };
}

module.exports = $Raven;