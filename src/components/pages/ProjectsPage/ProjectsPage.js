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

  useEffect(() => getProjects()
    .then((responseProjects) => setProjects(responseProjects.filter(
      (project) => project.ownerId === userId
          || project.memberIds.find((value) => value === userId),
    ))), []);

  const setMemberIds = (projectId, memberIds) => {
    setProjects(projects.map((project) => ((project.id === projectId) ? ({
      ...project,
      memberIds,
    }) : project)));
  };

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

  const onDeleteProject = (projectId) => {
    setProjects(projects.filter((project) => (project.id !== projectId)));
  };

  return (
    <ProjectsPageContext.Provider value={{ onEditProject, onDeleteProject, setMemberIds }}>
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
