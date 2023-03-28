import { useState, useRef, FormEvent } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/todo.module.css'
interface taskProp {
  id: number,
  value: string,
  isCompleted: boolean,
}

export default function Todo() {
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
      <Link href="/">ホーム</Link>
      <h1>
        ToDo（step1）
      </h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type={"text"} ref={valueRef} />
        <input type={"submit"} value={"追加"} />
      </form>
      <div className={styles.task_area}>
        <label>未完了</label>
        <Task tasks={tasks} handleTaskClick={handleChange} isCompleted={false} />
      </div>
      <div className={styles.completed_task_area}>
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