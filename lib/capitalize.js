"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = capitalize;
function capitalize(string) {
    var len = string.length;
    if (len > 1) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else if (len === 1) {
        return string.charAt(0).toUpperCase();
    }
    return string;
}