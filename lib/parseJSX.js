'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var startsOpenTag = function startsOpenTag(str, tag) {
    return str.indexOf('<' + tag) > -1;
};

var startsCloseTag = function startsCloseTag(str, tag) {
    return str.indexOf('</' + tag + '>') > -1;
};

var findEndTag = function findEndTag(str, tag) {
    var level = 0;
    var buffer = '';
    for (var charIndex = 0, charLen = str.length; charIndex < charLen; charIndex++) {
        buffer += str[charIndex];
        if (startsOpenTag(buffer, tag, charIndex)) {
            level++;
            buffer = '';
        }

        if (startsCloseTag(buffer, tag, charIndex)) {
            level--;
            if (level === 0) {
                return charIndex - (('</' + tag + '>').length + 1);
            }
            buffer = '';
        }
    }
    return -1;
};

var parseStr = function parseStr(str) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var currentStr = str;
    var ret = [];

    if (depth > 20) {
        console.error('Max Depth');
        return;
    }

    var found = true;

    while (found) {
        var firstTagArray = new RegExp('<([A-Z])[^<>]+>').exec(currentStr);
        if (firstTagArray !== null && firstTagArray.length) {
            var firstTagContent = firstTagArray[0];
            if (firstTagContent.indexOf(' />') > -1) {
                found = false;
                console.error('No self closing tags: see ' + firstTagContent);
            } else {
                var firstTagString = firstTagContent.replace('<', '').replace('>', '');
                var firstTag = new RegExp('(([A-Z])([a-z]|[A-Z])*)').exec(firstTagString);
                if (firstTag.length) {
                    var firstTagVal = firstTag[0];
                    var tag = {
                        tag: firstTagVal,
                        props: {},
                        children: []
                    };

                    if (firstTagArray.index > 0) {
                        ret.push(currentStr.substring(0, firstTagArray.index));
                    }

                    var endTag = findEndTag(currentStr, firstTagVal);
                    if (endTag === -1) {
                        found = false;
                        console.error('Could not find end tag for ' + firstTagVal);
                    }
                    var firstTagPropsString = firstTagString.replace(firstTagVal, '');
                    var firstTagPropsArray = firstTagPropsString.split(/([a-z]+="[^"]+")/);
                    for (var propIndex = 0, len = firstTagPropsArray.length; propIndex < len; propIndex++) {
                        var prop = firstTagPropsArray[propIndex].trim();
                        if (prop !== '' && prop !== ' ') {
                            var propSplit = prop.split('="');
                            if (propSplit.length === 1) {
                                tag.props[propSplit[0]] = true;
                            } else {
                                tag.props[propSplit.shift()] = propSplit.join('').split('"').join('');
                            }
                        }
                    }

                    var innerContent = currentStr.substring(firstTagArray.index + firstTagContent.length, endTag + 2);
                    tag.children = parseStr(innerContent, depth + 1);

                    ret.push(tag);

                    currentStr = currentStr.substring(endTag + ('</' + firstTagVal + '>').length + 2);
                } else {
                    found = false;
                    console.error('Could not find opening tag');
                }
            }
        } else {
            if (currentStr.length) {
                ret.push(currentStr);
            }
            found = false;
        }
    }

    return ret;
};

exports.default = parseStr;