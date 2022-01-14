import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { Formik, Form } from 'formik';
import { registrationValidationScheme } from '../../../schemas/authSchemas';
import { setUserData } from '../../../store/userSlice';
import { registerUser } from '../../../api/auth';
import MainContent from '../../common/MainContent';
import Image from '../../common/Image';
import Input from '../../common/Input';
import ErrorAlert from '../../common/alerts/ErrorAlert';
import AuthFormLink from '../../common/AuthFormLink';
import Button from '../../common/Button';
import RegisterImage from '../../../assets/images/register.jpg';
import { AUTHORIZATION_PAGE, MAIN_PAGE } from '../../../constants/routes';

function RegistrationPage() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const { show } = useAlert();

  const handleRegister = (userData) => {
    setIsLoading(true);

    registerUser(userData).then(({ accessToken, user }) => {
      setIsLoading(false);

      dispatch(setUserData({
        token: accessToken,
        ...user,
      }));

      history.push(MAIN_PAGE);
    })
      .catch((error) => {
        setIsLoading(false);

        return show(
          <ErrorAlert>
            {error.response.data}
          </ErrorAlert>,
        );
      });
  };

  return (
    <MainContent title="Registration">
      <Image source={RegisterImage} altText="Registration background" />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={registrationValidationScheme}
        onSubmit={handleRegister}
      >
        <Form className="w-400">
          <div>
            <Input label="First name" type="text" name="firstName" placeholder="First name" />
            <Input label="Last name" type="text" name="lastName" placeholder="Last name" />
            <Input label="Email" type="email" name="email" placeholder="Email" />
            <Input label="Password" type="password" name="password" placeholder="Password" />
            <AuthFormLink text="Already registered?" path={AUTHORIZATION_PAGE} link="Log in" />
            <Button wrapperClasses="auth-btn-wrapper" type="submit" disabled={isLoading} isLoading={isLoading}>Register</Button>
          </div>
        </Form>
      </Formik>
    </MainContent>
  );
}

export default RegistrationPage;
