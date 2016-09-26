const fs = require('fs');
const path = require('path');
const watch = require('node-watch');

const writeFile = () => {
    const utils = fs.readdirSync(path.resolve('lib'));
    let content = '';

    utils.forEach(util => {
        const component = util.split('.js')[0];
        content += 'export ' + component + ' from \'./lib/' + component + '\'\n';
    });

    fs.writeFileSync('index.js', content);
    console.log('updated');
}

watch('./lib', writeFile);
writeFile();
