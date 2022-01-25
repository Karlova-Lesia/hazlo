import { IconContext } from 'react-icons';
import { TiPen } from 'react-icons/ti';

function ModalCreateProjectIcon() {
  return (
    <IconContext.Provider value={{ color: 'white', size: '20px' }}>
      <TiPen />
    </IconContext.Provider>
  );
}

export default ModalCreateProjectIcon;
