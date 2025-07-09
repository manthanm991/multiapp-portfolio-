import { ERROR_MESSAGES, isValidEmail, isValidName, isValidPhone } from "../../Auth";

export const validateContactForm = (userData) => {
  const errors = [];

  if (!userData.firstName || !isValidName(userData.firstName)) {
    errors.push(ERROR_MESSAGES.NAME_MIN_LENGTH);
  }

  if (!userData.lastName || !isValidName(userData.lastName)) {
    errors.push(ERROR_MESSAGES.NAME_MIN_LENGTH);
  }

  if (!userData.email) {
    errors.push(ERROR_MESSAGES.EMAIL_REQUIRED);
  } else if (!isValidEmail(userData.email)) {
    errors.push(ERROR_MESSAGES.INVALID_EMAIL);
  }

  if (!userData.phone) {
    errors.push(ERROR_MESSAGES.PHONE_REQUIRED);
  } else if (!isValidPhone(userData.phone)) {
    errors.push(ERROR_MESSAGES.INVALID_PHONE);
  }

  if (!userData.message || userData.message.trim().length < 10) {
    errors.push(ERROR_MESSAGES.MESSAGE_TOO_SHORT);
  } else if (userData.message.trim().length > 1000) {
    errors.push(ERROR_MESSAGES.MESSAGE_TOO_LONG);
  }

  return errors;
};