// @flow

import { easeInOutQuad } from './easings';

type scrollConfig = {
    callback?: Function,
    duration: number,
    targetNode: any,
    easing: Function,
};

export default function scrollTo(to: number, 
    {
        callback,
        duration = 500,
        targetNode = document.body,
        easing = easeInOutQuad,
    }: scrollConfig = {},
    ) {
    if (duration) {
        const initialPosition = targetNode.scrollTop;
        const diff = to - initialPosition;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
            currentTime += increment;

            const newScrollTop = easing(currentTime, initialPosition, diff, duration);
            targetNode.scrollTop = newScrollTop; // eslint-disable-line no-param-reassign

            // animate unless its over
            if (currentTime < duration) {
                window.requestAnimationFrame(animateScroll);
            } else if (callback && typeof callback === 'function') {
                callback();
            }
        };
        
        animateScroll();
    } else {
        targetNode.scrollTop = to;
    }
}
