import { IoAddSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function CreateProjectIcon() {
  return (
    <IconContext.Provider value={{ color: 'white', size: '20px' }}>
      <div>
        <IoAddSharp />
      </div>
    </IconContext.Provider>
  );
}

export default CreateProjectIcon;
