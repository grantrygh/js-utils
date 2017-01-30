const fs = require('fs');
const path = require('path');
const watch = require('node-watch');

// Write util exports
const writeExports = () => {
    const utils = fs.readdirSync(path.resolve('lib'));
    let content = 'module.exports = {';

    utils.forEach(util => {
        const component = util.split('.js')[0];
        content += '\n    ' + component + ': require(\'./lib/'+ component +'.js\').default,';
    });

    content += '\n};\n';

    fs.writeFileSync('index.js', content);
    console.log('updated');
}

watch('./lib', writeExports);
writeExports();
