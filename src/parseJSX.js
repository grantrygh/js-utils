const startsOpenTag = (str, tag) => str.indexOf(`<${tag}`) > -1;

const startsCloseTag = (str, tag) => str.indexOf(`</${tag}>`) > -1;

const findEndTag = (str, tag) => {
    let level = 0;
    let buffer = '';
    for (let charIndex = 0, charLen = str.length; charIndex < charLen; charIndex++) {
        buffer += str[charIndex];
        if (startsOpenTag(buffer, tag, charIndex)) {
            level++;
            buffer = '';
        }

        if (startsCloseTag(buffer, tag, charIndex)) {
            level--;
            if (level === 0) {
                return charIndex - (`</${tag}>`.length + 1);
            }
            buffer = '';
        }
    }
    return -1;
}

const parseStr = (str, depth = 0) => {
    let currentStr = str;
    const ret = [];

    if (depth > 20) {
        console.error('Max Depth');
        return;
    }

    let found = true;

    while (found) {
        const firstTagArray = new RegExp('<([A-Z])[^<>]+>').exec(currentStr);
        if (firstTagArray !== null && firstTagArray.length) {
            const firstTagContent = firstTagArray[0];
            if (firstTagContent.indexOf(' />') > -1) {
                found = false;
                console.error(`No self closing tags: see ${firstTagContent}`);
            } else {
                const firstTagString = firstTagContent.replace('<', '').replace('>', '');
                const firstTag = new RegExp('(([A-Z])([a-z]|[A-Z])*)').exec(firstTagString);
                if (firstTag.length) {
                    const firstTagVal = firstTag[0];
                    const tag = {
                        tag: firstTagVal,
                        props: {},
                        children: [],
                    };

                    if (firstTagArray.index > 0) {
                        ret.push(currentStr.substring(0, firstTagArray.index));
                    }

                    const endTag = findEndTag(currentStr, firstTagVal);
                    if (endTag === -1) {
                        found = false;
                        console.error(`Could not find end tag for ${firstTagVal}`);
                    }
                    const firstTagPropsString = firstTagString.replace(firstTagVal, '');
                    const firstTagPropsArray = firstTagPropsString.split(/([a-z]+="[^"]+")/);
                    for (let propIndex = 0, len = firstTagPropsArray.length; propIndex < len; propIndex++) {
                        const prop = firstTagPropsArray[propIndex].trim();
                        if (prop !== '' && prop !== ' ') {
                            const propSplit = prop.split('="');
                            if (propSplit.length === 1) {
                                tag.props[propSplit[0]] = true;
                            } else {
                                tag.props[propSplit.shift()] = propSplit.join('').split('"').join('');
                            }
                        }
                    }

                    const innerContent = currentStr.substring(firstTagArray.index + firstTagContent.length, endTag + 2);
                    tag.children = parseStr(innerContent, depth + 1);

                    ret.push(tag);

                    currentStr = currentStr.substring(endTag + `</${firstTagVal}>`.length + 2);
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


export default parseStr;
