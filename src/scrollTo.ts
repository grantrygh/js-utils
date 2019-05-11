import { easings } from './easings';

interface scrollConfig {
    callback?: Function;
    duration?: number;
    easing?: Function;
}

export function scrollTo(to: number, { callback, duration = 500, easing = easings.easeInOutQuad }: scrollConfig = {}) {
    const initialY = window.scrollY;
    const initialX = window.scrollX;

    if (duration) {
        const diff = to - initialY;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
            currentTime += increment;

            const newScrollTop = easing(currentTime, initialY, diff, duration);
            window.scrollTo(initialX, newScrollTop); // eslint-disable-line no-param-reassign

            // animate unless its over
            if (currentTime < duration) {
                window.requestAnimationFrame(animateScroll);
            } else if (callback && typeof callback === 'function') {
                callback();
            }
        };

        animateScroll();
    } else {
        window.scrollTo(initialX, to);
    }
}
