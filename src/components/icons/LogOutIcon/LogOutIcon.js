import { IoLogOutOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import './styles.scss';

function LogOutIcon() {
  return (
    <IconContext.Provider value={{ className: 'logout-icon' }}>
      <div>
        <IoLogOutOutline />
      </div>
    </IconContext.Provider>
  );
}

export default LogOutIcon;
