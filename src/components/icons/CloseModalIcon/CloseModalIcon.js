import { IoCloseSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function CloseModalIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '20px' }}>
      <IoCloseSharp />
    </IconContext.Provider>
  );
}

export default CloseModalIcon;
