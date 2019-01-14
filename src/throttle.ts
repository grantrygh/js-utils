/* eslint-disable */
export default function throttle(func: Function, wait: number, leading = true) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    var later = function() {
        previous = leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function() {
        var now = Date.now();
        if (!previous && leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && leading) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
