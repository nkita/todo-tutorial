import { useState, useRef, FormEvent, forwardRef } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/todo2.module.css'
import { DndContext, DragOverlay } from '@dnd-kit/core';
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
  const [activeTask, setActiveTask] = useState<taskProp>();

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
  function handleDragStart(event: any) {
    const { active } = event;

    setActiveTask(tasks.filter(t => t.id === active.id) && undefined);
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
        ToDo（dndkit）
      </h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type={"text"} ref={valueRef} />
        <input type={"submit"} value={"追加"} />
      </form>
      <DndContext onDragEnd={e => handleDragEnd(e)} onDragStart={e => handleDragStart(e)} >
        <div className={styles.task_area}>
          <label>完了</label>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map(t => <SortableItem key={t.id} id={t.id} task={t} />)}
          </SortableContext>
          <DragOverlay>
            {activeTask ? <Item id={activeTask.id} task={activeTask} /> : null}
          </DragOverlay>
        </div>
      </DndContext>
    </>
  )
}

export function SortableItem(props: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <Item task={props.task} ref={setNodeRef} style={style} attbutes={attributes} listeners={listeners} >
    </Item>
  );
}

const Item = forwardRef(
  function Item(props: any, ref) {
    const { task, attributes, listeners, ...restProps } = props;
    return (
      <div ref={ref} {...restProps} >
        <span className={styles.task_area}>{task.value}</span>
        <span {...attributes} {...listeners} className={styles.drag_handle}>■</span>
      </div>
    )
  }
);


