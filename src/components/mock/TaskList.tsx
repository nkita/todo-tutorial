import { Box, VStack } from '@chakra-ui/react'
import Task from './Task';
import type { task } from '../../pages/mock'

export function TaskList(props: any) {
    const { tasks, ...restProps } = props;
    return (
        <Box
            {...restProps}
        >
            <VStack
                spacing={2}
            >
                {tasks &&
                    tasks.map((t: task) => {
                        return (
                            <Task key={t.id} task={t} />
                        )
                    })
                }
            </VStack>
        </Box>
    )

}