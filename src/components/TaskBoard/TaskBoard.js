import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createTask, editTask, getTasks } from '../../api/tasks';
import groupTasks from '../../helpers/tasks';
import CreateTaskModal from '../modals/CreateTaskModal';
import CreateTaskIcon from '../icons/CreateTaskIcon';
import './styles.scss';

const initialBoard = {
  columns: [
    {
      id: 0,
      title: 'to do',
      cards: [],
    },
    {
      id: 1,
      title: 'in progress',
      cards: [],
    },
    {
      id: 2,
      title: 'done',
      cards: [],
    },
  ],
};

const initialCreateTaskModal = {
  isOpen: false,
  isLoading: false,
  columnId: null,
  addCard: () => {},
};

function TaskBoard({ projectId }) {
  const [board, setBoard] = useState(initialBoard);
  const [isLoaded, setIsLoaded] = useState(false);
  const [createTaskModal, setCreateTaskModal] = useState(initialCreateTaskModal);

  useEffect(() => {
    getTasks(projectId).then((tasks) => {
      const groupedTasks = groupTasks(tasks);
      setBoard((oldBoard) => ({
        ...oldBoard,
        columns: oldBoard.columns.map((column) => ({
          ...column,
          cards: groupedTasks[column.id],
        })),
      }));
    }).finally(() => setIsLoaded(true));
  }, []);

  const openCreateTaskModal = (id, addCard) => {
    setCreateTaskModal({
      isOpen: true,
      columnId: id,
      addCard,
    });
  };

  const closeCreateTaskModal = () => {
    setCreateTaskModal(initialCreateTaskModal);
  };

  const onCreateTask = (task) => {
    const newTask = {
      ...task,
      projectId,
      columnId: createTaskModal.columnId,
    };

    setCreateTaskModal((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    createTask(newTask)
      .then(({ id }) => {
        createTaskModal.addCard({
          ...newTask,
          id,
        });
      })
      .finally(closeCreateTaskModal);
  };

  const handleCardMove = (_board, card, from, destination) => {
    editTask(card.id, {
      ...card,
      columnId: destination.toColumnId,
    });
  };

  const renderColumnHeader = ({ id, title }, { addCard }) => (
    <>
      <div className="card-title">
        {title}
      </div>

      <button
        className="column-btn"
        type="button"
        onClick={() => openCreateTaskModal(id, addCard)}
      >
        <CreateTaskIcon />
      </button>
    </>
  );

  return isLoaded && (
  <>
    <Board
      initialBoard={board}
      allowAddCard={{ on: 'top' }}
      onCardNew={() => {}}
      onCardDragEnd={handleCardMove}
      renderColumnHeader={renderColumnHeader}
    />
    {createTaskModal.isOpen && (
      <CreateTaskModal
        onClose={closeCreateTaskModal}
        onCreate={onCreateTask}
        isLoading={createTaskModal.isLoading}
      />
    )}
  </>
  );
}

TaskBoard.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default TaskBoard;
