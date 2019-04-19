export function randomFromRange(min, max) {
    // eslint-disable-next-line
    return Math.floor(Math.random() * (max - min + 1) + min);
}
