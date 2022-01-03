import { IoCloseCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function ErrorIcon() {
  return (
    <IconContext.Provider value={{ color: 'red', size: '30px', style: { margin: '15px' } }}>
      <div>
        <IoCloseCircleOutline />
      </div>
    </IconContext.Provider>
  );
}

export default ErrorIcon;
