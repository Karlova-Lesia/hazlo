import { useEffect, useState } from 'react';
import Board, { changeCard, addCard, moveCard } from '@asseinfo/react-kanban';
import PropTypes from 'prop-types';
import { editTask, getTasks } from '../../api/tasks';
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
        let updatedBoard = board;

        tasks.forEach((task) => {
          updatedBoard = addCard(updatedBoard, { id: task.columnId }, task);
        });

        setBoard(updatedBoard);
      })
      .finally(() => setIsLoaded(true));
  }, []);

  const handleCardMove = (card, from, to) => {
    editTask(card.id, {
      ...card,
      columnId: to.toColumnId,
    })
      .catch(() => {
        setBoard(board);
      });

    setBoard(moveCard(board, from, to));
  };

  const onEditTask = (taskId, changedTask) => {
    setBoard(changeCard(board, taskId, changedTask));
  };

  const onAddTask = (column, task) => {
    setBoard(addCard(board, column, task));
  };

  const renderColumnHeader = ({ id, title }) => (
    <ColumnHeader id={id} title={title} addCard={onAddTask} />
  );

  const renderCard = ({
    id, title, description, estimate, columnId,
  }, { dragging }) => (
    <TaskCard
      dragging={dragging}
      id={id}
      title={title}
      description={description}
      estimate={estimate}
      columnId={columnId}
      onEdit={onEditTask}
    />
  );

  return isLoaded && (
    <Board
      onCardDragEnd={handleCardMove}
      renderColumnHeader={renderColumnHeader}
      renderCard={renderCard}
    >
      {board}
    </Board>
  );
}

TaskBoard.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default TaskBoard;
