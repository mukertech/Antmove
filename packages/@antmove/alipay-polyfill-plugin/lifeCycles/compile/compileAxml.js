const generateAxml = require('../../generate/generateAxml.js');
const fs = require('fs-extra');

module.exports = function (fileInfo) {
    let originCode = generateAxml(fileInfo.ast, fileInfo);
    fs.outputFileSync(fileInfo.dist, originCode);
};
