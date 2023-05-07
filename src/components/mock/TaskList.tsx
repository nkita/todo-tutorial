import { Box, VStack } from '@chakra-ui/react'
import Task from './Task';
import type { task } from '../../pages/mock'
import { useEffect, useState } from 'react';

export function TaskList(props: any) {
    const { tasks, handleTaskClick, currentTaskId, searchTags, ...restProps } = props;
    const [taskList, setTaskList] = useState(tasks)
    useEffect(() => {
        if (searchTags.length > 0) {
            searchTags.length === 1 && searchTags[0] === "000" ?
                setTaskList(tasks) :
                setTaskList(tasks.filter((t: task) => searchTags.some((val: string) => t.tags.includes(val))));
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
                {taskList &&
                    taskList.map((t: task) => {
                        return (
                            <Task
                                handleTaskClick={handleTaskClick}
                                currentTaskId={currentTaskId}
                                key={t.id}
                                task={t} />
                        )
                    })
                }
            </VStack>
        </Box>
    )

}