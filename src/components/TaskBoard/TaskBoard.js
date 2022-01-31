import { useEffect, useState } from 'react';
import Board from '@asseinfo/react-kanban';
import PropTypes from 'prop-types';
import { editTask, getTasks } from '../../api/tasks';
import groupTasks from '../../helpers/tasks';
import TaskCard from '../TaskCard';
import ColumnHeader from '../ColumnHeader';
import '@asseinfo/react-kanban/dist/styles.css';
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
    getTasks(projectId)
      .then((tasks) => {
        const groupedTasks = groupTasks(tasks);
        setBoard((oldBoard) => ({
          ...oldBoard,
          columns: oldBoard.columns.map((column) => ({
            ...column,
            cards: groupedTasks[column.id],
          })),
        }));
      })
      .finally(() => setIsLoaded(true));
  }, []);

  const handleCardMove = (_board, card, from, destination) => {
    editTask(card.id, {
      ...card,
      columnId: destination.toColumnId,
    });
  };

  const renderColumnHeader = ({ id, title }, { addCard }) => (
    <ColumnHeader id={id} title={title} addCard={addCard} />
  );

  const renderCard = ({
    title, description, estimate,
  }, { dragging }) => (
    <TaskCard
      dragging={dragging}
      title={title}
      description={description}
      estimate={estimate}
    />
  );

  return isLoaded && (
    <Board
      initialBoard={board}
      allowAddCard={{ on: 'top' }}
      onCardNew={() => {}}
      onCardDragEnd={handleCardMove}
      renderColumnHeader={renderColumnHeader}
      renderCard={renderCard}
    />
  );
}

TaskBoard.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default TaskBoard;
