import LogoTodo from "../assets/Logo.svg";
import style from "./Header.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  onAddNewTask : (taskTitle:string) => void
}


export const Header = ({onAddNewTask}:Props) => {
  const[title,setTitle] = useState('')

  const handleNewTask = (event:FormEvent) => {
    event.preventDefault()
    onAddNewTask(title)
    setTitle("")
  }

  const onChangeTitle =(event:ChangeEvent<HTMLInputElement>)=>{
    const newTask = event.target.value

    setTitle(newTask)
  }
  return (
    <>
      <header className={style.header}>
        <img src={LogoTodo} alt="logo" />
      </header>
      
      <form className={style.container} onSubmit={handleNewTask}>
          <input placeholder="Adicione uma nova tarefa" value={title} onChange={onChangeTitle}></input>
        <button  >
          Criar
          <PlusCircle size={32} />
        </button>
        </form>
    </>
  );
};
