/**
 * Created by Lars on 2015-06-20.
 */
const locales = require('./locales');

const DEFAULT_LOCALE = 'nl';

module.exports.localize = function(locale, key) {
    // Verify that the supplied locale makes sense
    // otherwise set a default locale
    this.locale = typeof(locale) === 'string' ? locale : DEFAULT_LOCALE;
    // Verify that the key is a string type
    this.key = typeof(key) === 'string' ? key : null;

    // If we have received a full locale,
    // cut the more specific part.
    // i.e. `en_GB` becomes `en`
    if (this.locale.length === 5 &&
        this.locale.indexOf('_') === 2) {
        this.locale = this.locale.substring(0, 2);
    }

    // If no locale translation is found, use the default locale
    if (locales[this.locale] == null) {
        this.locale = DEFAULT_LOCALE;
    }

    var result = locales[this.locale][this.key];

    if (result == null) {
        throw new Error('Locale key string not found key=' + this.key);
    }

    return result;
};