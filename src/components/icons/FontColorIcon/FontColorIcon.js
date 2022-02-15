import { MdColorLens } from 'react-icons/md';
import { IconContext } from 'react-icons';
import './styles.scss';

function FontColorIcon() {
  return (
    <IconContext.Provider value={{ className: 'font-color-icon' }}>
      <MdColorLens />
    </IconContext.Provider>
  );
}

export default FontColorIcon;
