/* eslint-disable */

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */
export default function debounce(func: Function, wait: number, immediate: boolean): Function {
    var timeout;
    const debounced = function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };

    // @ts-ignore
    debounced.cancel = () => {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
