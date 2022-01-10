import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { setUserData } from '../../../store/userSlice';
import { authUser } from '../../../api/auth';
import MainContent from '../../common/MainContent';
import Image from '../../common/Image';
import AuthForm from '../../AuthForm';
import Input from '../../common/Input';
import AuthFormLink from '../../common/AuthFormLink';
import Button from '../../common/Button';
import ErrorAlert from '../../common/alerts/ErrorAlert';
import AuthImage from '../../../assets/images/auth.jpg';
import { MAIN_PAGE, REGISTRATION_PAGE } from '../../../constants/routes';

function AuthorizationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const { show } = useAlert();

  const onEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const onPasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const auth = (event) => {
    event.preventDefault();

    setIsLoading(true);

    authUser({
      email, password,
    }).then(({ accessToken, user }) => {
      dispatch(setUserData({
        token: accessToken,
        ...user,
      }));
      history.push(MAIN_PAGE);
    })
      .catch((error) => show(
        <ErrorAlert>
          {error.response.data}
        </ErrorAlert>,
      ))
      .finally(() => setIsLoading(false));
  };

  return (
    <MainContent title="Authorization">
      <Image source={AuthImage} altText="Authorization background" />
      <AuthForm onSubmit={auth}>
        <Input label="Email" value={email} type="email" placeholder="Email" onChange={onEmailChange} />
        <Input label="Password" value={password} type="password" placeholder="Password" onChange={onPasswordChange} />
        <AuthFormLink text="Not registered yet?" path={REGISTRATION_PAGE} link="Register" />
        <Button wrapperClasses="auth-btn-wrapper" type="submit" disabled={isLoading} isLoading={isLoading}>Log in</Button>
      </AuthForm>
    </MainContent>
  );
}

export default AuthorizationPage;
