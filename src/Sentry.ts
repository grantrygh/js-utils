interface conf {
    [key: string]: any;
}

interface SentryInterface {
    captureException: (e: Error, config?: conf) => void;
    init: (config: conf) => void;
    configureScope: (scope: any) => void;
    captureMessage: (msg: string, config?: conf) => void;
    addBreadcrumb: (c: { message: string; category: string; data: conf }) => void;
    [key: string]: any;
}

/* eslint-disable import/no-mutable-exports */
let Sentry: SentryInterface;
if (__BROWSER__) {
    Sentry = require('@sentry/browser');
} else {
    Sentry = require('@sentry/node');
}

export default Sentry;
