import { Link } from 'react-router-dom';
import AuthForm from '../../AuthForm';
import Input from '../../common/Input';
import Button from '../../common/Button';
import RegisterImage from '../../../assets/images/register.jpg';
import './styles.scss';

function RegistrationPage() {
  return (
    <main className="main-content-wrapper">
      <h3 className="title">Registration</h3>
      <div className="main-content">
        <div className="image-wrapper">
          <img src={RegisterImage} alt="image" />
        </div>
        <AuthForm>
          <Input label="First name" type="text" placeholder="First name" />
          <Input label="Last name" type="text" placeholder="Last name" />
          <Input label="Email" type="email" placeholder="Email" />
          <Input label="Password" type="password" placeholder="Password" />
          <div className="link-wrapper">
            <span className="pr-2">Already registered?</span>
            <Link to="/login" className="link">Log in</Link>
          </div>
          <Button className="btn bg-mint" type="submit">Register</Button>
        </AuthForm>
      </div>
    </main>
  );
}

export default RegistrationPage;
