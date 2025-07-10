/**
 * Converts a given string to CamelCase.
 * For example, "hello world" becomes "HelloWorld".
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The CamelCase version of the input string.
 */
function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}