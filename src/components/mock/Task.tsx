import {
    Box,
    Checkbox,
    HStack,
    IconButton,
    Text
} from '@chakra-ui/react'
export default function TaskList(props: any) {
    const { task, handleTaskClick, currentTaskId } = props;

    return (
        <Box
            w={'100%'}
            bg={'white'}
            rounded={5}
            p={2}
            borderColor={currentTaskId === task.id ? "gray.400" : "gray.200"}
            borderWidth="1px"
            _hover={{
                borderColor: "gray.400",
                cursor: "pointer"
            }}
            transition={"ease 0.2s"}
            onClick={e => handleTaskClick(task.id)}
        >
            <HStack>
                <Checkbox />
                <Text
                    borderColor={"blue"}
                    w={"100%"}
                    p={1}
                    fontSize={"0.9em"}
                >
                    {task.label}
                </Text>
            </HStack>
        </Box >
    )

}