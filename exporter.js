const fs = require('fs');
const path = require('path');
const watch = require('node-watch');

const shouldWatch = process.argv[2];

// Write util exports
const writeExports = () => {
    const utils = fs.readdirSync(path.resolve('lib'));
    let content = '';

    utils.forEach(util => {
        const component = util.split('.js')[0];
        content += 'exports.' + component + ' = require(\'./lib/'+ component +'.js\').default;\n';
    });

    // content += '\n};\n';

    fs.writeFileSync('index.js', content);
    console.log('Exporter: updated exports.');
}

writeExports();

if (shouldWatch) watch('./lib', writeExports);
