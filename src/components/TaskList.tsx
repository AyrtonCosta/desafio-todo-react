import { CheckCircle, Trash } from "phosphor-react";
import { Tasks } from "../App";
import style from "./TaskList.module.css";

type Props = {
  task:Tasks,
  deleteTask: (taskId:string) => void,
  onTaskCompleted:(taskId:string) => void
}

export const TaskList = ({task,deleteTask,onTaskCompleted }:Props) => {
  const onDeleteTask = () => {
    deleteTask(task.id)
  }
 
  return (
    <div className={style.taskListContainer}>
      <button className={style.check} onClick={() => onTaskCompleted(task.id)}>
        {task.isCompleted ? <CheckCircle size={22} />  :<div />}
      </button>

      <p className={task.isCompleted ? style.taskCompleted : ''}>
        {task.title}
      </p>

      <button className={style.deleteTask} onClick={onDeleteTask}>
        <Trash size={20}/>
      </button>
    </div>
  );
};
