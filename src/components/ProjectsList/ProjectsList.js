import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../../api/users';
import ProjectItem from '../ProjectItem';
import './styles.scss';

function ProjectsList({ projects }) {
  const [members, setMembers] = useState([]);

  useEffect(() => getUsers()
    .then((users) => {
      setMembers(users.map(({ id: userId, firstName, lastName }) => (
        { id: userId, firstName, lastName }
      )));
    }), []);

  return (
    <ul className="projects-list">
      {projects.map(({
        id, title, description, ownerId, memberIds,
      }) => (
        <ProjectItem
          key={id}
          id={id}
          title={title}
          description={description}
          ownerId={ownerId}
          members={members}
          memberIds={memberIds}
        />
      ))}
    </ul>
  );
}

ProjectsList.propTypes = {
  projects: PropTypes.array,
};

ProjectsList.defaultProps = {
  projects: [],
};

export default ProjectsList;
