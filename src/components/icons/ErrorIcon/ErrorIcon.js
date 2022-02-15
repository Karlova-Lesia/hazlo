import { IoCloseCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import './styles.scss';

function ErrorIcon() {
  return (
    <IconContext.Provider value={{ className: 'error-icon' }}>
      <div>
        <IoCloseCircleOutline />
      </div>
    </IconContext.Provider>
  );
}

export default ErrorIcon;
