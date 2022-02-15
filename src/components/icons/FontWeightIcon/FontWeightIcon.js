import { MdLineWeight } from 'react-icons/md';
import { IconContext } from 'react-icons';
import './styles.scss';

function FontWeightIcon() {
  return (
    <IconContext.Provider value={{ className: 'font-weight-icon' }}>
      <MdLineWeight />
    </IconContext.Provider>
  );
}

export default FontWeightIcon;
