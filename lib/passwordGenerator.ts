const SPECIAL_CHARACTERS = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";

/**
 * Generates a strong random password.
 * @param {number} length - Desired length of the password (default 12)
 * @returns {string} - Randomly generated strong password
 */
export function generateRandomPassword(length: number = 8): string {
    const allChars = SPECIAL_CHARACTERS + LOWERCASE_LETTERS + UPPERCASE_LETTERS + NUMBERS;
    return Array.from({ length }, () =>
        allChars[Math.floor(Math.random() * allChars.length)]
    ).join('');
}


