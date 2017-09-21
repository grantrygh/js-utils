"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = findGetParameter;
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}