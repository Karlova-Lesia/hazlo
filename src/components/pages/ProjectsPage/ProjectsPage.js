import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../../../api/projects';
import { ProjectsPageContext } from '../../../contexts/projectsContext';
import MainContent from '../../common/MainContent';
import ProjectsList from '../../ProjectsList';
import Button from '../../common/Button';
import CreateProjectIcon from '../../icons/CreateProjectIcon';
import CreateProjectModal from '../../modals/CreateProjectModal';
import './styles.scss';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] = useState(false);

  const { id: userId } = useSelector(({ user }) => user);

  useEffect(() => getProjects({ userId }).then((response) => setProjects(response)), []);

  const openCreateProjectModal = () => {
    setIsCreateProjectModalOpen(true);
  };

  const closeCreateProjectModal = () => {
    setIsCreateProjectModalOpen(false);
  };

  const onCreateProject = (project) => {
    setProjects([...projects, project]);
  };

  const onEditProject = (projectId, changedProject) => {
    setProjects(projects.map((project) => (
      projectId === project.id ? changedProject : project
    )));
  };

  return (
    <ProjectsPageContext.Provider value={{ onEditProject }}>
      <>
        <MainContent title="Projects">
          <div className="projects-block-wrapper">
            {projects.length
              ? <ProjectsList projects={projects} />
              : <span className="text">No projects yet</span>}
            <Button onClick={openCreateProjectModal}>
              <CreateProjectIcon />
              Create
            </Button>
          </div>
        </MainContent>
        {
        isCreateProjectModalOpen
        && (
        <CreateProjectModal
          onClose={closeCreateProjectModal}
          onCreate={onCreateProject}
        />
        )
    }
      </>
    </ProjectsPageContext.Provider>
  );
}

export default ProjectsPage;
