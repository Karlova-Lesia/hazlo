import { MdLineWeight } from 'react-icons/md';
import { IconContext } from 'react-icons';

function FontWeightIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '20px' }}>
      <MdLineWeight />
    </IconContext.Provider>
  );
}

export default FontWeightIcon;
