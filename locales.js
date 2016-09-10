/**
 * Created by Lars on 2015-06-25.
 */
const fs = require('fs');
const path = require('path');

const LOCALE_FILE_DIR = path.join(__dirname, 'locales/');

var locales = {
    en : readFileSync('en.json'),
    nl : readFileSync('nl.json')
};

module.exports = locales;

function readFileSync(fileName) {
    if (typeof(fileName) !== 'string') {
        throw new Error('Trying to read incorrect filename');
    }

    return JSON.parse(fs.readFileSync(path.join(LOCALE_FILE_DIR, fileName), 'utf8'));
}