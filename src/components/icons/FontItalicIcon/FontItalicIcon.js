import { MdFormatItalic } from 'react-icons/md';
import { IconContext } from 'react-icons';
import './styles.scss';

function FontItalicIcon() {
  return (
    <IconContext.Provider value={{ className: 'font-italic-icon' }}>
      <MdFormatItalic />
    </IconContext.Provider>
  );
}

export default FontItalicIcon;
