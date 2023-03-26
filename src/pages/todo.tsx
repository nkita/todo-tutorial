import { useState, useRef, useEffect, FormEvent } from 'react';
import Head from 'next/head'

interface taskProp {
  id: number,
  value: string,
  isCompleted: boolean,
}

export default function TodoTodo() {
  const valueRef = useRef<HTMLInputElement>(null);
  const [tasks, setTasks] = useState<taskProp[]>([]);
  const [id, setId] = useState(0);

  const pushToTasks = () => {
    if (valueRef.current) {
      if (valueRef.current.value !== "") {
        tasks.push(
          {
            id: id,
            value: valueRef.current.value,
            isCompleted: false
          })
        setTasks(tasks)
        setId(id + 1)
        valueRef.current.value = "";
      }
    }
  }
  const handleSubmit = (e: FormEvent) => {
    pushToTasks()
    e.preventDefault();
  }
  const handleChange = (id: number) => {
    setTasks(
      tasks.map(t => {
        t.isCompleted = t.id === id ? !t.isCompleted : t.isCompleted
        return t
      })
    )
  }
  return (
    <>
      <Head>
        <title>ToDo | ToDo App Tutorial </title>
        <meta name="description" content="This page is Tutorial Todo App." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ここでは新規Todoを作ることができます。
      <form onSubmit={e => handleSubmit(e)}>
        <input type={"text"} ref={valueRef} />
        <input type={"submit"} value={"追加"} />
      </form>
      <div className={"task_area"}>
        <label>未完了</label>
        <Task tasks={tasks} handleTaskClick={handleChange} isCompleted={false} />
      </div>
      <div className={"completed_task_area"}>
        <label>完了済み</label>
        <Task tasks={tasks} handleTaskClick={handleChange} isCompleted={true} />
      </div>
    </>
  )
}

/**
 * task component
 * */
const Task: React.FC<{
  tasks: taskProp[];
  handleTaskClick: (id: number) => void;
  isCompleted: boolean;
}> = ({
  tasks,
  handleTaskClick,
  isCompleted,
}) => {

    return (
      <>
        {tasks.map(t => {
          if (isCompleted === t.isCompleted) {
            return (
              <li key={"id:" + t.id}>
                <input type="checkbox" defaultChecked={isCompleted} id={"id" + t.id} onChange={_ => handleTaskClick(t.id)} />
                <label htmlFor={"id" + t.id} >{t.value}</label>
              </li>
            )
          }
        })}
      </>
    )
  }