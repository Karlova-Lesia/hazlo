import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { editTask, getTasks } from '../../api/tasks';
import groupTasks from '../../helpers/tasks';
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

function TaskBoard({ projectId }) {
  const [board, setBoard] = useState(initialBoard);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const handleCardMove = (_board, card, from, destination) => {
    editTask(card.id, {
      ...card,
      columnId: destination.toColumnId,
    });
  };

  const renderColumnHeader = ({ title }, { addCard }) => (
    <>
      <div className="card-title">
        {title}
      </div>

      <button
        className="column-btn"
        type="button"
        onClick={() => addCard({ id: 99, title: 'New Card' })}
      >
        <CreateTaskIcon />
      </button>
    </>
  );

  return isLoaded && (
    <Board
      initialBoard={board}
      allowAddCard={{ on: 'top' }}
      onCardNew={console.log}
      onCardDragEnd={handleCardMove}
      renderColumnHeader={renderColumnHeader}
    />
  );
}

TaskBoard.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default TaskBoard;
