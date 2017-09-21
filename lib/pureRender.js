'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pureRender(nextProps, nextState, nextContext) {
    return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState) || !(0, _shallowequal2.default)(this.context, nextContext);
}

exports.default = pureRender;