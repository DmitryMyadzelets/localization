/**
 * Created by Lars on 2015-06-20.
 */


module.exports.replacePlaceholders = function(string, replacements) {
    string = string.replace(/{{ \w+ }}/g, function(all) {
        return replacements[all] || all;
    });

    return string;
};