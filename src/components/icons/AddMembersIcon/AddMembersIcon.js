import { IconContext } from 'react-icons';
import { HiUserAdd } from 'react-icons/hi';
import PropTypes from 'prop-types';
import './styles.scss';

function AddMembersIcon({ className }) {
  return (
    <IconContext.Provider value={{ className: { className } }}>
      <HiUserAdd className={className} />
    </IconContext.Provider>
  );
}

AddMembersIcon.propTypes = {
  className: PropTypes.string,
};

AddMembersIcon.defaultProps = {
  className: 'add-members-icon',
};

export default AddMembersIcon;
