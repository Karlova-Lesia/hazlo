import { IconContext } from 'react-icons';
import { IoMdSearch } from 'react-icons/io';
import './styles.scss';

function ShowTaskDetailsIcon() {
  return (
    <IconContext.Provider value={{ className: 'modal-icon-task-show' }}>
      <IoMdSearch />
    </IconContext.Provider>
  );
}

export default ShowTaskDetailsIcon;
