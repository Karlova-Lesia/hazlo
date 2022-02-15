import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './styles.scss';

function DeleteProjectIcon({ className }) {
  return (
    <IconContext.Provider value={{ className: { className } }}>
      <div>
        <FaTrashAlt className={className} />
      </div>
    </IconContext.Provider>
  );
}

DeleteProjectIcon.propTypes = {
  className: PropTypes.string,
};

DeleteProjectIcon.defaultProps = {
  className: 'delete-icon',
};

export default DeleteProjectIcon;
