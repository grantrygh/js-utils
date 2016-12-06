const truncate = (string, length, suffix = '...') => {
    if (string.length > length) {
        return string.slice(0, length) + suffix;
    }

    return string;
};

export default truncate;
