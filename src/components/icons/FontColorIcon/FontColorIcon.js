import { MdColorLens } from 'react-icons/md';
import { IconContext } from 'react-icons';

function FontColorIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '20px' }}>
      <MdColorLens />
    </IconContext.Provider>
  );
}

export default FontColorIcon;
