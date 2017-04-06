const fs = require('fs');
const path = require('path');
const watch = require('node-watch');

const shouldWatch = process.argv[2];

// Write util exports
const writeExports = () => {
    const utils = fs.readdirSync(path.resolve('lib'));
    let content = 'module.exports = {\n';

    utils.forEach(util => {
        const component = util.split('.js')[0];
        content += `    get ${component}() { return require('./lib/${component}').default; },\n`;
    });

    content += '};\n';

    fs.writeFileSync('index.js', content);
    console.log('Exporter: updated exports.');
}

writeExports();

if (shouldWatch) watch('./lib', writeExports);
