import { IoAddSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import './styles.scss';

function CreateProjectIcon() {
  return (
    <IconContext.Provider value={{ className: 'create-project-icon' }}>
      <div>
        <IoAddSharp />
      </div>
    </IconContext.Provider>
  );
}

export default CreateProjectIcon;
