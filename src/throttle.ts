export function throttle<T extends (...args: any[]) => void>(func: T, wait: number, leading = true): T {
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    const later = () => {
        previous = leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    return function throttledFunction() {
        const now = Date.now();
        if (!previous && leading === false) previous = now;
        const remaining = wait - (now - previous);
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
    } as any;
}
