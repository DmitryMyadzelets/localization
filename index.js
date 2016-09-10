/**
 * Created by Lars on 2015-06-20.
 */

const locales = require('./localize');
const replace = require('./replace');

function localize(locale, key, replacements) {
    var result = locales.localize(locale, key);

    if (result == null) {
        throw new Error('Locale key string not found');
    }

    if (typeof(replacements === 'object')) {
        result = replace.replacePlaceholders(result, replacements);
    }

    return result;
}

module.exports.localize = localize;