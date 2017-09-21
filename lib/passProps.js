'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = passProps;
var passThroughProps = ['refCallback', 'onMouseOver', 'onMouseEnter', 'onMouseLeave', 'onClick', 'style', 'data-'];

function passProps(props) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$include = _ref.include,
        include = _ref$include === undefined ? [] : _ref$include,
        _ref$exclude = _ref.exclude,
        exclude = _ref$exclude === undefined ? [] : _ref$exclude;

    var filteredProps = {};

    for (var prop in props) {
        if ((passThroughProps.indexOf(prop) > -1 || include.indexOf(prop) > -1) && exclude.indexOf(prop) === -1) {
            filteredProps[prop] = props[prop];
        }
    }

    return filteredProps;
}