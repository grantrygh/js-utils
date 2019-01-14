/* eslint-disable */

const cookies = {
    getItem(sKey) {
        if (typeof document !== 'object') return null;

        if (!sKey) {
            return null;
        }
        return (
            decodeURIComponent(
                document.cookie.replace(
                    new RegExp(
                        '(?:(?:^|.*;)\\s*' +
                            encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
                            '\\s*\\=\\s*([^;]*).*$)|^.*$'
                    ),
                    '$1'
                )
            ) || null
        );
    },

    setItem(sKey, sValue, vEnd?: string | number | Date, sPath?: string, sDomain?: string, bSecure?: boolean) {
        if (typeof document !== 'object') return false;
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = '';
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                    break;
                case String:
                    sExpires = '; expires=' + vEnd;
                    break;
                case Date:
                    sExpires = '; expires=' + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie =
            encodeURIComponent(sKey) +
            '=' +
            encodeURIComponent(sValue) +
            sExpires +
            (sDomain ? '; domain=' + sDomain : '') +
            '; path=' +
            (sPath || '/') +
            (bSecure ? '; secure' : '');
        return true;
    },

    removeItem(sKey, sPath?, sDomain?) {
        if (typeof document !== 'object') return false;
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie =
            encodeURIComponent(sKey) +
            '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
            (sDomain ? '; domain=' + sDomain : '') +
            '; path=' +
            (sPath || '/');
        return true;
    },

    hasItem(sKey) {
        if (typeof document !== 'object') return false;
        if (!sKey) {
            return false;
        }
        return new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(
            document.cookie
        );
    },

    keys() {
        if (typeof document !== 'object') return [];
        var aKeys = document.cookie
            .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
            .split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    },
};

export default cookies;
