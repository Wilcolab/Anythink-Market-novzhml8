function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim and replace multiple spaces with a single space
    const trimmed = input.trim().replace(/\s+/g, ' ');

    // Validate: only letters and spaces allowed
    if (/[^a-zA-Z\s]/.test(trimmed)) {
        throw new Error('Input must contain only letters and spaces');
    }

    // Convert to lowercase, split by space, and join with hyphens
    return trimmed
        .toLowerCase()
        .split(' ')
        .join('-');
}