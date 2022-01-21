import { IoAddSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function CreateTaskIcon() {
  return (
    <IconContext.Provider value={{ color: 'grey', size: '20px' }}>
      <div>
        <IoAddSharp />
      </div>
    </IconContext.Provider>
  );
}

export default CreateTaskIcon;
