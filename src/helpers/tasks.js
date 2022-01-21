const groupTasks = (tasks) => tasks.reduce((objWithTasks, task) => {
  const { columnId } = task;

  return {
    ...objWithTasks,
    [columnId]: (columnId in objWithTasks) ? [...objWithTasks[columnId], task] : [task],
  };
}, { 0: [], 1: [], 2: [] });

export default groupTasks;
