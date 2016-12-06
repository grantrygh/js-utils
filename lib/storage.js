'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * A (very) simple localStorage wrapper
 * facilitates storing and retrieving objects/arrays
 */

var createStorage = function createStorage(storage) {
    return {
        set: function set(item, data) {
            switch (typeof data === 'undefined' ? 'undefined' : _typeof(data)) {
                case 'object':
                    // Stringify objects before storing them
                    storage.setItem(item, JSON.stringify(data));
                    break;
                default:
                    storage.setItem(item, data);
            }
        },
        get: function get(item) {
            var data = storage.getItem(item);
            try {
                return JSON.parse(data);
            } catch (err) {
                return data;
            }
        },
        remove: function remove(item) {
            return storage.removeItem(item);
        }
    };
};

var storage = {
    local: createStorage(localStorage),
    session: createStorage(sessionStorage)
};

exports.default = Object.assign({}, storage, storage.local);