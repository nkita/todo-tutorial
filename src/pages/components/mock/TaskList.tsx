import { Box, VStack } from '@chakra-ui/react'
import Task from './Task';
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
                    tasks.map(t => {
                        return (
                            < Task key={tasks.id} task={t}/>
                        )
                    })
                }
            </VStack>
        </Box>
    )

}