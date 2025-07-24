// /utils/validationUtils.ts

export const sanitizeInput = (input: string) => {
    return input.trim().replace(/<[^>]*>?/gm, ""); // basic XSS protection
};

export const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const isValidPassword = (password: string) => {
    // At least 6 characters, includes number and letter
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
};
