"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fullscreen = {
    lastScrollPos: null
};

fullscreen.isAvailable = function () {
    if (document.fullscreenEnabled || document.msFullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled) {
        return true;
    }
    return false;
};

fullscreen.isEnabled = function () {
    if (document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
        return true;
    }
    return false;
};

fullscreen.enter = function (elem) {
    elem = elem instanceof HTMLElement ? elem : document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
};

fullscreen.exit = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
};

fullscreen.toggle = function (elem) {
    if (fullscreen.isEnabled()) {
        fullscreen.exit();
    } else {
        fullscreen.enter(elem);
    }
};

exports.default = fullscreen;