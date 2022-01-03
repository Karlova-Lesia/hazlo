import MainContent from '../../common/MainContent';
import Image from '../../common/Image';
import AuthForm from '../../AuthForm';
import Input from '../../common/Input';
import AuthFormLink from '../../common/AuthFormLink';
import Button from '../../common/Button';
import AuthImage from '../../../assets/images/auth.jpg';
import { REGISTRATION_PAGE } from '../../../constants/routes';

function AuthorizationPage() {
  return (
    <MainContent title="Authorization">
      <Image source={AuthImage} altText="Authorization background" />
      <AuthForm>
        <Input label="Email" type="email" placeholder="Email" />
        <Input label="Password" type="password" placeholder="Password" />
        <AuthFormLink text="Not registered yet?" path={REGISTRATION_PAGE} link="Register" />
        <Button type="submit">Log in</Button>
      </AuthForm>
    </MainContent>
  );
}

export default AuthorizationPage;
