import PropTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

function CloseModalIcon({ style }) {
  return (
    <IconContext.Provider value={{ style }}>
      <IoCloseSharp />
    </IconContext.Provider>
  );
}

CloseModalIcon.propTypes = {
  style: PropTypes.object,
};

CloseModalIcon.defaultProps = {
  style: { color: 'lightgrey', size: '16px' },
};

export default CloseModalIcon;
