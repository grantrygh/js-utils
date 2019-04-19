/**
 * Check if a URL/path is external
 *
 * @param {string} path - URL/path to test
 * @param {Location=} location - location from router. origin matching wont work if not passed
 *
 * @returns {boolean} is path external
 */
export function isExternalUrl(path: string, location?: Location): boolean {
    if (location && path.indexOf(location.origin) === 0) {
        // If `path` is full URL but origin is same
        // not external
        return false;
    }

    // Full URL
    // is external
    if (
        path.indexOf('http://') === 0 ||
        path.indexOf('https://') === 0 ||
        path.indexOf('ftp://') === 0 ||
        path.indexOf('tel:') === 0 ||
        path.indexOf('mailto:') === 0
    ) {
        return true;
    }

    // anything else (local paths: /eg/test)
    // not external
    return false;
}
