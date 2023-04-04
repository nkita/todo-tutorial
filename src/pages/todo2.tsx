import { useState, useRef, FormEvent } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/todo2.module.css'
import { DndContext } from '@dnd-kit/core';
import { SortableContext, useSortable, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface taskProp {
  id: number,
  value: string,
  isCompleted: boolean,
}

export default function Todo() {
  const valueRef = useRef<HTMLInputElement>(null);
  const [tasks, setTasks] = useState<taskProp[]>([]);
  const [id, setId] = useState(1);

  const pushToTasks = () => {
    if (valueRef.current) {
      if (valueRef.current.value !== "") {
        let _tasks = tasks.slice()
        _tasks.push(
          {
            id: id,
            value: valueRef.current.value,
            isCompleted: false
          })
        setTasks(_tasks)
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
        if (t.id === id) t.isCompleted = !t.isCompleted;
        return t
      })
    )
  }
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = tasks.findIndex(t => t.id === active.id)
      const newIndex = tasks.findIndex(t => t.id === over.id)
      const _tasks = arrayMove(tasks, oldIndex, newIndex);
      setTasks(_tasks)
    }
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
        ToDo（step2）
      </h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type={"text"} ref={valueRef} />
        <input type={"submit"} value={"追加"} />
      </form>
      <DndContext onDragEnd={e => handleDragEnd(e)}>
        <div className={styles.task_area}>
          <label>未完了</label>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            <Task tasks={tasks} handleTaskClick={handleChange} isCompleted={false} />
          </SortableContext>
        </div>
      </DndContext>
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
      <ul>
        {tasks.map(t => {
          if (isCompleted === t.isCompleted) {
            return (
              <SortableItem key={t.id} id={t.id} >
                <span>
                  <input type="checkbox" defaultChecked={isCompleted} id={t.id.toString()} onChange={_ => handleTaskClick(t.id)} />
                  <label title={t.value}>{t.value}</label>
                </span>
              </SortableItem>
            )
          }
        })}
      </ul>
    )
  }

/**
 * Sortable Component
 */
function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <li ref={setNodeRef} style={style}>
      {props.children}
      <button {...listeners} {...attributes} className={styles.drag_handle} >↕</button>
    </li>
  );
}