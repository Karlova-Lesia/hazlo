import { IoAddSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import './styles.scss';

function CreateTaskIcon() {
  return (
    <IconContext.Provider value={{ className: 'create-task-icon' }}>
      <div>
        <IoAddSharp />
      </div>
    </IconContext.Provider>
  );
}

export default CreateTaskIcon;
