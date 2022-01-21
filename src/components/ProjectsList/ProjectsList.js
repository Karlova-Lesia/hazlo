import PropTypes from 'prop-types';
import ProjectItem from '../ProjectItem';
import './styles.scss';

function ProjectsList({ projects }) {
  return (
    <ul className="projects-list">
      {projects.map(({ id, title }) => <ProjectItem key={id} id={id} title={title} />)}
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
