import { IconContext } from 'react-icons';
import { TiPen } from 'react-icons/ti';
import './styles.scss';

function ModalCreateProjectIcon() {
  return (
    <IconContext.Provider value={{ className: 'modal-create-project-icon' }}>
      <TiPen />
    </IconContext.Provider>
  );
}

export default ModalCreateProjectIcon;
