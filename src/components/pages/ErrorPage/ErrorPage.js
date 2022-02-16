import { useLocation, useHistory } from 'react-router-dom';
import MainContent from '../../common/MainContent';
import Button from '../../common/Button';
import ErrorImage from '../../../assets/images/error.png';
import { MAIN_PAGE } from '../../../constants/routes';
import './styles.scss';

function ErrorPage() {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <MainContent>
      <div className="error-content-wrapper">
        <h1 className="error-title">Error 404</h1>
        <p className="error-main-content">
          Page
          <span className="pathname-text">
            {pathname}
          </span>
          not found!
        </p>
        <Button onClick={() => history.push(MAIN_PAGE)} wrapperClasses="error-btn-wrapper">
          To main
        </Button>
      </div>
      <div className="error-image-wrapper">
        <img src={ErrorImage} alt="Error background" />
      </div>
    </MainContent>
  );
}

export default ErrorPage;
