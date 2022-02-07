import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function DeleteProjectIcon({ style }) {
  return (
    <IconContext.Provider value={style}>
      <div>
        <FaTrashAlt />
      </div>
    </IconContext.Provider>
  );
}

DeleteProjectIcon.propTypes = {
  style: PropTypes.object,
};

DeleteProjectIcon.defaultProps = {
  style: { color: 'lightgrey', size: '16px' },
};

export default DeleteProjectIcon;
