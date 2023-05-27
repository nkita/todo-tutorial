import { Box, VStack } from '@chakra-ui/react'
import Task from './Task';
import type { task } from '../../pages/mock'
import { useEffect, useState } from 'react';

export function TaskList(props: any) {
    const { tasks, completedTasks, handleTaskClick, currentTaskId, searchTags, onCompleted, onUnCompleted, ...restProps } = props;
    const [taskList, setTaskList] = useState(tasks)
    const [isCompleted, setIsCompleted] = useState(false)

    const handleCompletedTaskChecked = (id: string) => { onUnCompleted(id) };
    const handleTaskChecked = (id: string) => { onCompleted(id) };


    useEffect(() => {
        setIsCompleted(false)
        if (searchTags.length > 0) {
            if (searchTags.length === 1) {
                switch (searchTags[0]) {
                    case 'completed':
                        setIsCompleted(true)
                        break;
                    default:
                        setTaskList(tasks)
                }
            } else {
                setTaskList(tasks.filter((t: task) => searchTags.some((val: string) => t.tags.includes(val))));
            }
        } else {
            //タグなし
            setTaskList(tasks.filter((t: task) => t.tags.length === 0))
        }
    }, [tasks, searchTags])

    return (
        <Box
            {...restProps}
        >
            <VStack
                spacing={2}
            >
                {taskList && !isCompleted &&
                    taskList.map((t: task) => {
                        return (
                            <Task
                                handleTaskClick={handleTaskClick}
                                currentTaskId={currentTaskId}
                                key={t.id}
                                task={t}
                                onChecked={handleTaskChecked}
                            />
                        )
                    })
                }
                {completedTasks && isCompleted &&
                    completedTasks.map((t: task) => {
                        return (
                            <Task
                                handleTaskClick={handleTaskClick}
                                currentTaskId={currentTaskId}
                                key={t.id}
                                task={t}
                                onChecked={handleCompletedTaskChecked}
                                isChecked={isCompleted}
                            />
                        )
                    })
                }
            </VStack>
        </Box>
    )

}