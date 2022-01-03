import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { registerUser } from '../../../api/auth';
import AuthForm from '../../AuthForm';
import Input from '../../common/Input';
import Button from '../../common/Button';
import ErrorAlert from '../../common/alerts/ErrorAlert/ErrorAlert';
import { MAIN_PAGE } from '../../../constants/routes';
import RegisterImage from '../../../assets/images/register.jpg';
import './styles.scss';

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
    <main className="main-content-wrapper">
      <h3 className="title">Registration</h3>
      <div className="main-content">
        <div className="image-wrapper">
          <img src={RegisterImage} alt="Registration background" />
        </div>
        <AuthForm onSubmit={register}>
          <Input label="First name" value={firstName} type="text" placeholder="First name" onChange={onFirstNameChange} />
          <Input label="Last name" value={lastName} type="text" placeholder="Last name" onChange={onLastNameChange} />
          <Input label="Email" value={email} type="email" placeholder="Email" onChange={onEmailChange} />
          <Input label="Password" value={password} type="password" placeholder="Password" onChange={onPasswordChange} />
          <div className="link-wrapper">
            <span className="pr-2">Already registered?</span>
            <Link to="/login" className="link">Log in</Link>
          </div>
          <Button className="btn bg-mint" type="submit" disabled={isLoading} isLoading={isLoading}>Register</Button>
        </AuthForm>
      </div>
    </main>
  );
}

export default RegistrationPage;
