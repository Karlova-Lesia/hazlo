import { FaPencilAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './styles.scss';

function EditProjectIcon() {
  return (
    <IconContext.Provider value={{ className: 'edit-icon' }}>
      <div>
        <FaPencilAlt />
      </div>
    </IconContext.Provider>
  );
}

export default EditProjectIcon;
