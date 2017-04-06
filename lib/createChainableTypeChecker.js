"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var chainablePropType = function chainablePropType(predicate) {
    var propType = function propType(props, propName, componentName) {
        // don't do any validation if empty
        if (props[propName] == null) {
            return;
        }

        return predicate(props, propName, componentName);
    };

    propType.isRequired = function (props, propName, componentName) {
        // warn if empty
        if (props[propName] == null) {
            return new Error("Required prop `" + propName + "` was not specified in `" + componentName + "`.");
        }

        return predicate(props, propName, componentName);
    };

    return propType;
};

exports.default = chainablePropType;