'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = joinUrl;
function removeTrailingSlash(path) {
    if (path.charAt(path.length - 1) === '/') {
        return path.slice(0, -1);
    }

    return path;
}

function removeLeadingSlash(path) {
    if (path.charAt(0) === '/') {
        return path.slice(1, path.length);
    }

    return path;
}

function joinUrl() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var ret = args[0];

    // args.forEach((partial, index) => {
    //     if (index === 0) {
    //         ret += removeTrailingSlash(partial);
    //     } else {
    //         ret += '/' + removeLeadingSlash(partial);
    //     }
    // });

    args.forEach(function (partial, index) {
        if (index > 0) ret += '/' + partial;
    });

    ret.replace(/\/\//g, '/');

    return ret;
}