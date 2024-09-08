import React from 'react';

function TaskItem({ task, handleTaskAction, actionLabel, secondaryAction, secondaryLabel }) {
  return (
    <li className="task-item">
      {task}
      <button onClick={handleTaskAction}>{actionLabel}</button>
      {secondaryAction && (
        <button onClick={secondaryAction}>{secondaryLabel}</button>
      )}
    </li>
  );
}

export default React.memo(TaskItem);
