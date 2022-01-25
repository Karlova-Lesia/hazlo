import { FaFont } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function FontIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '18px' }}>
      <FaFont />
    </IconContext.Provider>
  );
}

export default FontIcon;
