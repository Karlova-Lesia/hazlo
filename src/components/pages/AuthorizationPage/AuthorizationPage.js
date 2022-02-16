import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { Formik, Form } from 'formik';
import { authorizationValidationScheme } from '../../../schemas/authSchemas';
import { setUserData } from '../../../store/userSlice';
import { authUser } from '../../../api/auth';
import MainContent from '../../common/MainContent';
import Image from '../../common/Image';
import Input from '../../common/Input';
import AuthFormLink from '../../common/AuthFormLink';
import Button from '../../common/Button';
import ErrorAlert from '../../common/alerts/ErrorAlert';
import AuthImage from '../../../assets/images/auth.jpg';
import { MAIN_PAGE, REGISTRATION_PAGE } from '../../../constants/routes';

function AuthorizationPage() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const { show } = useAlert();

  const handleAuth = ({ email, password }) => {
    setIsLoading(true);

    authUser({ email, password }).then(({ accessToken, user }) => {
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
    <MainContent title="Authorization">
      <Image source={AuthImage} altText="Authorization background" />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={authorizationValidationScheme}
        onSubmit={handleAuth}
      >
        <Form className="w-400">
          <div className="form-content">
            <Input labelValue="Email" type="email" name="email" placeholder="Email" />
            <Input labelValue="Password" type="password" name="password" placeholder="Password" />
            <AuthFormLink text="Not registered yet?" path={REGISTRATION_PAGE} link="Register" />
            <Button wrapperClasses="auth-btn-wrapper" type="submit" disabled={isLoading} isLoading={isLoading}>Log in</Button>
          </div>
        </Form>
      </Formik>
    </MainContent>
  );
}

export default AuthorizationPage;
