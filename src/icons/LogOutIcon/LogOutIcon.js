import { IoLogOutOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function LogOutIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '30px' }}>
      <div>
        <IoLogOutOutline />
      </div>
    </IconContext.Provider>
  );
}

export default LogOutIcon;
