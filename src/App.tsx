import { Header } from "./components/Header";
import { Task } from "./components/Task";
import "./App.module.css";
import { useState } from "react";

export type Tasks = {
  id: string;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const addNewTask = (taskTitle: string) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTask = (taskId: string) => {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  };

  const taskCompleted = (taskId: string) => {
    const taskCompleted = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(taskCompleted);
  };
  return (
    <>
      <Header onAddNewTask={addNewTask} />
      <Task tasks={tasks} deleteTask={deleteTask} onTaskCompleted={taskCompleted} />
    </>
  );
}

export default App;
