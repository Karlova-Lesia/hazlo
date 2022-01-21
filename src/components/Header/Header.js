import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHORIZATION_PAGE } from '../../constants/routes';
import { setUserData } from '../../store/userSlice';
import LogOutIcon from '../icons/LogOutIcon';
import './styles.scss';

function Header() {
  const dispatch = useDispatch();

  const history = useHistory();

  const { token } = useSelector(({ user }) => user);

  const logout = () => {
    dispatch(setUserData({}));
    history.push(AUTHORIZATION_PAGE);
  };

  return (
    <header
      className="header"
    >
      <div>
        <h1 className="logo">
          Haz
          <br />
          lo
        </h1>
      </div>
      {token
        ? (
          <div className="btn-logout" data-title="Log out">
            <button type="button" onClick={logout}>
              <LogOutIcon />
            </button>
          </div>
        ) : <div />}
    </header>
  );
}

export default Header;
