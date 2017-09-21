export default function domainLocalize(string) {
    if (string.indexOf('https://themehouse.com') === 0) {
        return string.replace('https://themehouse.com', '');
    }
    if (string.indexOf('https://www.themehouse.com') === 0) {
        return string.replace('https://www.themehouse.com', '');
    }

    return string;
}
