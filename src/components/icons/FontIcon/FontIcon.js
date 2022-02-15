import { FaFont } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './styles.scss';

function FontIcon() {
  return (
    <IconContext.Provider value={{ className: 'font-icon' }}>
      <FaFont />
    </IconContext.Provider>
  );
}

export default FontIcon;
