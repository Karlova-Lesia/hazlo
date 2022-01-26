import * as Yup from 'yup';
import {
  getMaxSizeMessage,
  getMinSizeMessage,
  getRequiredMessage,
  INVALID_EMAIL_ADDRESS_MESSAGE,
} from '../helpers/validationHelpers';

export const createTaskValidationScheme = Yup.object({
  title: Yup.string()
    .min(2, getMinSizeMessage('name', 2))
    .required(getRequiredMessage('name')),
  estimate: Yup.string()
    .max(4, getMaxSizeMessage('estimate', 4))
    .required(getRequiredMessage('estimate')),
  description: Yup.string()
    .min(20, getMinSizeMessage('description', 20))
    .required(getRequiredMessage('description')),
});
