import { IconContext } from 'react-icons';
import { IoMdSearch } from 'react-icons/io';

function ShowTaskDetailsIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '20px' }}>
      <IoMdSearch />
    </IconContext.Provider>
  );
}

export default ShowTaskDetailsIcon;
