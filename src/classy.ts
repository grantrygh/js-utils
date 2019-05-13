/**
 * Get valid classNames from multiple expressions
 *
 * @param {...string|...booleans} classNames - strings and falsy values. falsy values will be dicarded
 * @returns {string} className
 */
export function classy(...args: Array<string | boolean | number | null | undefined>): string {
    let classname: string = '';

    args.forEach((arg: string) => {
        if (arg) {
            if (classname.length) classname += ' ' + arg;
            else classname += arg;
        }
    });

    return classname;
}
