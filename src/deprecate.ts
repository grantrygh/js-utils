const logged = {};

/**
 * Depercation warning
 *
 * @param what What is being deprecated?
 * @param message Message (long)
 */
export function deprecate(what: string, message?: string): void {
    if (logged[what]) return;

    if (__BROWSER__) {
        if (console.groupCollapsed) {
            console.groupCollapsed(`%c${what} is deprecated`, 'background-color:#FFF8DC');
            if (message) console.log(message);
            console.trace();
            console.groupEnd();
        }
    } else {
        const chalk = require('chalk');

        console.log(chalk.yellow(`${what} is deprecated`));
        console.log(message);
    }
    if (!console.groupCollapsed) return;

    logged[what] = true;
}
