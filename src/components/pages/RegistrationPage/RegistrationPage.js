import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { registerUser } from '../../../api/auth';
import MainContent from '../../common/MainContent';
import Image from '../../common/Image';
import AuthForm from '../../AuthForm';
import Input from '../../common/Input';
import AuthFormLink from '../../common/AuthFormLink';
import Button from '../../common/Button';
import ErrorAlert from '../../common/alerts/ErrorAlert/ErrorAlert';
import RegisterImage from '../../../assets/images/register.jpg';
import { AUTHORIZATION_PAGE, MAIN_PAGE } from '../../../constants/routes';

function RegistrationPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const { show } = useAlert();

  const onFirstNameChange = (event) => {
    const { value } = event.target;
    setFirstName(value);
  };

  const onLastNameChange = (event) => {
    const { value } = event.target;
    setLastName(value);
  };

  const onEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const onPasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const register = (event) => {
    event.preventDefault();

    setIsLoading(true);

    registerUser({
      firstName, lastName, email, password,
    }).then(({ accessToken }) => {
      localStorage.setItem('token', accessToken);
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
    <MainContent title="Registration">
      <Image source={RegisterImage} altText="Registration background" />
      <AuthForm onSubmit={register}>
        <Input label="First name" value={firstName} type="text" placeholder="First name" onChange={onFirstNameChange} />
        <Input label="Last name" value={lastName} type="text" placeholder="Last name" onChange={onLastNameChange} />
        <Input label="Email" value={email} type="email" placeholder="Email" onChange={onEmailChange} />
        <Input label="Password" value={password} type="password" placeholder="Password" onChange={onPasswordChange} />
        <AuthFormLink text="Already registered?" path={AUTHORIZATION_PAGE} link="Log in" />
        <Button type="submit" disabled={isLoading} isLoading={isLoading}>Register</Button>
      </AuthForm>
    </MainContent>
  );
}

export default RegistrationPage;
