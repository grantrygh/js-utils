'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var logger = console;
var no_op = function no_op() {};

if (process.env.NODE_ENV !== 'development') {
    logger = {
        warn: no_op,
        log: no_op,
        error: no_op,
        info: no_op
    };
}

exports.default = logger;