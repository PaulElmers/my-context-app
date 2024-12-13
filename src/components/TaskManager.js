import React, { useState } from 'react';
import { useTaskList } from './TaskListContext';

const TaskManager = () => {
  const { tasks, addTask, removeTask } = useTaskList();
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName) {
      addTask({ id: Date.now(), name: taskName });
      setTaskName('');
    }
  };

  return (
    <div>
      <h2>Список задач</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Нова задача"
      />
      <button onClick={handleAddTask}>Додати</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => removeTask(task.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
