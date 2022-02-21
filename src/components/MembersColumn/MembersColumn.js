import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMembersByIds } from '../../api/users';
import UserIcon from '../icons/UserIcon';
import './styles.scss';

function MembersColumn({ project }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (project) {
      getMembersByIds(project.memberIds).then((response) => {
        setMembers(response);
      });
    }
  }, [project]);

  return (
    <ul className="members-column-wrapper">
      <h1 className="members-column-header">Members</h1>
      {members.map(({ id: userId, firstName, lastName }) => (
        <li key={userId} className="members-column-item">
          <UserIcon />
          {firstName}
                        &nbsp;
          {lastName}
        </li>
      ))}
    </ul>
  );
}

MembersColumn.propTypes = {
  project: PropTypes.object,
};

MembersColumn.defaultProps = {
  project: {},
};

export default MembersColumn;
