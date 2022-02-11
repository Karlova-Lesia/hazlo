import { IconContext } from 'react-icons';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

function IsSelectedIcon() {
  return (
    <IconContext.Provider value={{ color: 'green', size: '20px' }}>
      <div>
        <IoMdCheckmarkCircleOutline />
      </div>
    </IconContext.Provider>
  );
}

export default IsSelectedIcon;
