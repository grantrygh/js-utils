"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = offView;
// Check if element is inside specified container (window by default)
// pass these (if you have them cached) to improve performance
// scrollY boundingClientRect, windowHeight,
// windowWidth, scrollX - if you're checking horizontal as well
function offView(element, params) {

    var scrollY = params.scrollY === undefined ? window.scrollY : scrollY;
    var rect = params.boundingClientRect || element.getBoundingClientRect();
    var windowHeight = params.windowHeight || window.innerHeight;
    var windowWidth = params.windowHeight || window.innerWidth;

    if (rect.top > scrollY + windowHeight) return true; // below viewport
    if (rect.top + rect.height < scrollY) return true; // above viewport

    return false; // Not offview
}