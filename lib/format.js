'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// const FormatCurrency = Intl && new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
// });

var parseNumber = function parseNumber(num) {
    return Number(num).toLocaleString();
};

var parseCurrency = function parseCurrency(amount) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$split = _ref.split,
        split = _ref$split === undefined ? false : _ref$split;

    var float = parseFloat(amount).toFixed(2);
    var parts = float.split('.');
    var sign = amount < 0 ? '-' : '';

    if (split) {
        return {
            sign: sign,
            integer_part: parseNumber(Math.abs(parts[0])),
            fractional_part: parts[1]
        };
    }

    // first part as formatted number (add commas for US) + decimal points
    var amount_formatted = parseNumber(Math.abs(parts[0])) + '.' + parts[1];

    return sign + '$' + amount_formatted;
};

var size = function size(bytes) {
    var units = ['TB', 'GB', 'MB', 'KB', 'Bytes'];
    var unit = void 0;
    for (unit = units.pop(); units.length && bytes >= 1024; unit = units.pop()) {
        bytes /= 1024;
    }
    return bytes.toFixed(2) + unit;
};

exports.default = {
    // currency: amount => FormatCurrency.format(Number(amount)),
    currency: parseCurrency,
    number: parseNumber,
    size: size
};