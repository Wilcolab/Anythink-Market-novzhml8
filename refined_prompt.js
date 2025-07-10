function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check for numbers
    if (/\d/.test(input)) {
        throw new Error('Enter words please');
    }

    // Check for special characters (allow only letters and spaces)
    if (/[^a-zA-Z\s]/.test(input)) {
        throw new Error('Special characters are not allowed');
    }

    // Trim and replace multiple spaces with a single space
    const cleaned = input.trim().replace(/\s+/g, ' ');

    // Split into words, lowercase all, capitalize first letter except first word
    const words = cleaned.split(' ');
    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("  hello   world  ")); // "helloWorld"

/**
 * Converts a given string to dot.case (words separated by dots and all lowercase).
 *
 * This function performs the following steps:
 * 1. Validates that the input is a string.
 * 2. Throws an error if the input contains any numbers.
 * 3. Throws an error if the input contains any special characters (only letters and spaces are allowed).
 * 4. Trims leading and trailing whitespace and replaces multiple spaces with a single space.
 * 5. Converts all words to lowercase and joins them with dots.
 *
 * @function toDotCase
 * @param {string} input - The input string to be converted to dot.case.
 * @throws {Error} Throws an error if the input is not a string.
 * @throws {Error} Throws an error if the input contains numbers.
 * @throws {Error} Throws an error if the input contains special characters (other than spaces).
 * @returns {string} The input string converted to dot.case format.
 *
 * @example
 * toDotCase('Hello World'); // Returns 'hello.world'
 * toDotCase('  JavaScript   Functions  '); // Returns 'javascript.functions'
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check for numbers
    if (/\d/.test(input)) {
        throw new Error('Enter words please');
    }

    // Check for special characters (allow only letters and spaces)
    if (/[^a-zA-Z\s]/.test(input)) {
        throw new Error('Special characters are not allowed');
    }

    // Trim and replace multiple spaces with a single space
    const cleaned = input.trim().replace(/\s+/g, ' ');

    // Split into words, lowercase all, join with dots
    return cleaned
        .split(' ')
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase("  hello   world  ")); // "hello.world"
/**
 * Converts a given string to kebab-case (all lowercase words separated by hyphens).
 *
 * Steps:
 * 1. Validates that the input is a string.
 * 2. Throws an error if the input contains any numbers.
 * 3. Throws an error if the input contains special characters (only letters and spaces are allowed).
 * 4. Trims leading and trailing whitespace and replaces multiple spaces with a single space.
 * 5. Converts all words to lowercase and joins them with hyphens.
 *
 * @function toKebabCase
 * @param {string} input - The input string to be converted to kebab-case.
 * @throws {Error} Throws an error if the input is not a string.
 * @throws {Error} Throws an error if the input contains numbers.
 * @throws {Error} Throws an error if the input contains special characters (other than spaces).
 * @returns {string} The input string converted to kebab-case format.
 *
 * @example
 * toKebabCase('Hello World'); // Returns 'hello-world'
 * toKebabCase('  JavaScript   Functions  '); // Returns 'javascript-functions'
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check for numbers
    if (/\d/.test(input)) {
        throw new Error('Enter words please');
    }

    // Check for special characters (allow only letters and spaces)
    if (/[^a-zA-Z\s]/.test(input)) {
        throw new Error('Special characters are not allowed');
    }

    // Trim and replace multiple spaces with a single space
    const cleaned = input.trim().replace(/\s+/g, ' ');

    // Split into words, lowercase all, join with hyphens
    return cleaned
        .split(' ')
        .map(word => word.toLowerCase())
        .join('-');
}

// Example usage:
// console.log(toKebabCase("  hello   world  ")); // "hello-world"