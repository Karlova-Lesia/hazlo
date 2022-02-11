import { IconContext } from 'react-icons';
import { HiUserAdd } from 'react-icons/hi';
import PropTypes from 'prop-types';

function AddMembersIcon({ style }) {
  return (
    <IconContext.Provider value={style}>
      <HiUserAdd />
    </IconContext.Provider>
  );
}

AddMembersIcon.propTypes = {
  style: PropTypes.object,
};

AddMembersIcon.defaultProps = {
  style: { color: 'lightgrey', size: '20px' },
};

export default AddMembersIcon;
