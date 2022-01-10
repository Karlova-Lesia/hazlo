import { FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function DeleteProjectIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '16px' }}>
      <div>
        <FaTrashAlt />
      </div>
    </IconContext.Provider>
  );
}

export default DeleteProjectIcon;
