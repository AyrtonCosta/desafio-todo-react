import { Tasks } from "../App";
import { TaskList } from "./TaskList";
import Clipboard from '../assets/Clipboard.svg'
import style from "./Task.module.css";

type Props = {
  tasks: Tasks[];
  deleteTask: (taskId: string) => void;
  onTaskCompleted: (taskId: string) => void;
};

export const Task = ({ tasks, deleteTask, onTaskCompleted }: Props) => {
  const taskQuantity = tasks.length;
  const taskCompleted = tasks.filter((task) => task.isCompleted).length;
  return (
    <section className={style.tasks}>
      <header className={style.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <p className={style.textPurple}>Concluídas</p>
          <span>
            {taskCompleted} de {taskQuantity}
          </span>
        </div>
      </header>
      <div className={style.taskList}>
        {tasks.map((task) => {
          return (
            <TaskList
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              onTaskCompleted={onTaskCompleted}
            />
          );
        })}

        {tasks.length <= 0 && (
            <section className={style.emptyTask}>
              <img src={Clipboard} alt="" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </section>
        )}
      </div>
    </section>
  );
};
