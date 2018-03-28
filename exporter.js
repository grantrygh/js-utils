const fs = require('fs');
const path = require('path');
const watch = require('node-watch');

const argv = process.argv.slice(2);
const shouldWatch = argv.indexOf('--watch') > -1;

// Write util exports
const writeExports = (folder) => {
    const utils = fs.readdirSync(path.resolve(folder));
    let content = '';

    utils.forEach(util => {
        const component = util.split('.js')[0];
        if (folder === 'dist') {
            content += `exports['${component}'] = require('./${component}');\n`;
        } else {
            content += `export ${component} from './${folder}/${component}';\n`;
        }
    });
    if (folder === 'dist') {
        fs.writeFileSync('dist/index.js', content);
    } else {
        fs.writeFileSync('index.js', content);
    }
    console.log('Exporter: updated exports.'); // eslint-disable-line
};

if (argv.indexOf('--dist') > -1) {
    writeExports('dist');
} else {
    writeExports('src');
    if (shouldWatch) watch('./src', () => { writeExports('src'); });
}
