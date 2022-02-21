import { IconContext } from 'react-icons';
import { IoPerson } from 'react-icons/io5';
import './styles.scss';

function UserIcon() {
  return (
    <IconContext.Provider value={{ className: 'user-icon' }}>
      <IoPerson />
    </IconContext.Provider>
  );
}

export default UserIcon;
