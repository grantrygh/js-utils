"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * For simpler(?) getComponent syntax
 */
var routerLoader = function routerLoader(req) {
    return function (location, callback) {
        req.then(function (component) {
            callback(null, component.default);
        }).catch(function (error) {
            console.error(error);
        });
    };
};

exports.default = routerLoader;