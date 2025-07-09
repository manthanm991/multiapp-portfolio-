export const API_BASE_URL = 'http://localhost:5000/api/';

export const AUTH_ENDPOINTS = {
  LOGIN: 'auth/login',
  SIGNUP: 'auth/createuser',
  FORGOT_PASSWORD: 'auth/forgot-password',
  RESET_PASSWORD: 'auth/reset-password',
  GOOGLE_CALLBACK: 'auth/callback',
};

export const AUTH_ACTIONS = {
  AUTH_START: 'AUTH_START',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE',
  LOGOUT: 'LOGOUT',
  LOAD_USER: 'LOAD_USER',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

export const STORAGE_KEYS = { TOKEN: 'token', USER: 'user' };

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  FORGOT_PASSWORD: '/forgotPassword',
  UNAUTHORIZED: '/unauthorized',
  RESET_PASSWORD: '/reset-password/:token'
};

export const VALIDATION_RULES = {
  MIN_PASSWORD_LENGTH: 8,
  MIN_NAME_LENGTH: 3,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  STRONG_PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  PHONE_REGEX: /^[6-9]\d{9}$/,
};

export const ERROR_MESSAGES = {
  EMAIL_REQUIRED: 'Email is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORD_REQUIRED: 'Password is required.',
  PASSWORD_MIN_LENGTH: `Password must be at least ${VALIDATION_RULES.MIN_PASSWORD_LENGTH} characters long.`,
  PASSWORDS_NO_MATCH: 'Passwords do not match.',
  NAME_REQUIRED: 'Name is required.',
  NAME_MIN_LENGTH: `Name must be at least ${VALIDATION_RULES.MIN_NAME_LENGTH} characters long.`,
  PHONE_REQUIRED: 'Phone number is required.',
  INVALID_PHONE: 'Please enter a valid 10-digit phone number.',
  LOGIN_FAILED: 'Login failed. Please try again.',
  SIGNUP_FAILED: 'Signup failed. Please try again.',
  SESSION_EXPIRED: 'Session expired. Please login again.',
  UNEXPECTED_ERROR: 'An unexpected error occurred. Please try again.',
  INVALID_SERVER_RESPONSE: 'Invalid response from server',
  RESET_PASSWORD_FAILED: 'Failed to reset password. Please try again.',
  MESSAGE_TOO_SHORT: 'Message must be at least 10 characters long.',
  MESSAGE_TOO_LONG: 'Message must not exceed 1000 characters.',
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: (name) => `Welcome back, ${name}!`,
  SIGNUP_SUCCESS: (name) => `Welcome, ${name}! Account created successfully.`,
  SIGNUP_LOGIN_REQUIRED: 'Account created successfully! Please login to continue.',
  LOGOUT_SUCCESS: 'You have been logged out successfully.',
  PASSWORD_RESET_SUCCESS: 'Password has been reset successfully!',
  FORM_SUBMISSION_SUCCESS: 'Your Message has been sent successfully!'
};

export const TOAST_CONFIG = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "colored",
  limit: 5,
  bodyClassName: "toastBody",
  toastClassName: "custom-toast"
};