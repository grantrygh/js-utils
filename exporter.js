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
        if (util.indexOf('.ts') > -1) {
            const component = util.split('.ts')[0];
        
            if (folder === 'dist') {
                content += `exports['${component}'] = require('./${component}');\n`;
            } else {
                content += `export { default as ${component} } from './${folder}/${component}';\n`;
            }
        }
    });

    if (folder === 'dist') {
        fs.writeFileSync('dist/index.ts', content);
    } else {
        fs.writeFileSync('index.ts', content);
    }

    console.log('Exporter: updated exports.'); // eslint-disable-line
};

if (argv.indexOf('--dist') > -1) {
    writeExports('dist');
} else {
    writeExports('src');
    if (shouldWatch) watch('./src', () => { writeExports('src'); });
}
