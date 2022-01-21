import { FaPencilAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function EditProjectIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '16px' }}>
      <div>
        <FaPencilAlt />
      </div>
    </IconContext.Provider>
  );
}

export default EditProjectIcon;
