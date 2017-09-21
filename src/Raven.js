let $Raven;

if (process.env.isBrowser) {
    $Raven = require('raven-js');
} else {
    $Raven = {
        captureException: () => {},
    };
}

module.exports = $Raven;
