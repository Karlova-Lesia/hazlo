import { IconContext } from 'react-icons';
import { IoIosRadioButtonOff } from 'react-icons/io';

function IsNotSelectedIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '20px' }}>
      <div>
        <IoIosRadioButtonOff />
      </div>
    </IconContext.Provider>
  );
}

export default IsNotSelectedIcon;
