export function stylish(style: object, key: string, variants: { [key: string]: any }): string {
    let className = '';

    for (const variant in variants) {
        if (variants[variant]) {
            className += style[`${key}__${variant}`] + ' ';
        }
    }

    return className;
}
