import * as Yup from 'yup';
import { getMinSizeMessage, getRequiredMessage } from '../helpers/validationHelpers';

export const projectValidationScheme = Yup.object({
  title: Yup.string()
    .min(2, getMinSizeMessage('name', 2))
    .required(getRequiredMessage('name')),
  description: Yup.string()
    .min(20, getMinSizeMessage('description', 20))
    .required(getRequiredMessage('description')),
});
