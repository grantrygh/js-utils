/**
 * Truncate string
 *
 * @param string - string that you want to truncate
 * @param length - max string length
 * @param suffix - string to suffix if string is longer than `length`
 */
export default function truncate(string: string, length: number, suffix = '...'): string {
    if (string.length <= length) return string;
    return string.substring(0, length) + suffix;
}
