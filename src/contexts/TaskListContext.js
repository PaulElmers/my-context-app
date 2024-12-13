import React, { createContext, useState, useContext } from 'react';

const TaskListContext = createContext();

export const TaskListProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);
  const removeTask = (id) => setTasks((prev) => prev.filter((task) => task.id !== id));

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskListContext.Provider>
  );
};

export const useTaskList = () => useContext(TaskListContext);
