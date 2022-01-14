import * as Yup from 'yup';
import {
  getMaxSizeMessage,
  getMinSizeMessage,
  getRequiredMessage,
  INVALID_EMAIL_ADDRESS_MESSAGE,
} from '../helpers/validationHelpers';

export const registrationValidationScheme = Yup.object({
  firstName: Yup.string()
    .min(2, getMinSizeMessage('first name', 2))
    .max(15, getMaxSizeMessage('first name', 15))
    .required(getRequiredMessage('first name')),
  lastName: Yup.string()
    .min(2, getMinSizeMessage('last name', 2))
    .max(20, getMaxSizeMessage('last name', 20))
    .required(getRequiredMessage('last name')),
  email: Yup.string().email(INVALID_EMAIL_ADDRESS_MESSAGE)
    .required(getRequiredMessage('email')),
  password: Yup.string()
    .min(8, getMinSizeMessage('password', 8))
    .max(25, getMaxSizeMessage('password', 25))
    .required(getRequiredMessage('password')),
});

export const authorizationValidationScheme = Yup.object({
  email: Yup.string().email(INVALID_EMAIL_ADDRESS_MESSAGE)
    .required(getRequiredMessage('email')),
});
