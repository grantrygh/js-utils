'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = scrollTo;

var _easings = require('./easings');

function scrollTo(to) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        callback = _ref.callback,
        _ref$duration = _ref.duration,
        duration = _ref$duration === undefined ? 500 : _ref$duration,
        _ref$targetNode = _ref.targetNode,
        targetNode = _ref$targetNode === undefined ? document.body : _ref$targetNode,
        _ref$easing = _ref.easing,
        easing = _ref$easing === undefined ? _easings.easeInOutQuad : _ref$easing;

    if (duration) {
        (function () {
            var initialPosition = targetNode.scrollTop;
            var diff = to - initialPosition;
            var increment = 20;
            var currentTime = 0;

            var animateScroll = function animateScroll() {
                currentTime += increment;

                var newScrollTop = easing(currentTime, initialPosition, diff, duration);
                targetNode.scrollTop = newScrollTop; // eslint-disable-line no-param-reassign

                // animate unless its over
                if (currentTime < duration) {
                    window.requestAnimationFrame(animateScroll);
                } else if (callback && typeof callback === 'function') {
                    callback();
                }
            };

            animateScroll();
        })();
    } else {
        targetNode.scrollTop = to;
    }
}