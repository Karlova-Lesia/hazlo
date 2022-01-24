import { MdFormatItalic } from 'react-icons/md';
import { IconContext } from 'react-icons';

function FontItalicIcon() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '22px' }}>
      <MdFormatItalic />
    </IconContext.Provider>
  );
}

export default FontItalicIcon;
