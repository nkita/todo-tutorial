import {
    Box,
    Checkbox,
    HStack,
    IconButton,
    Text
} from '@chakra-ui/react'
export default function TaskList(props: any) {
    const { task, handleTaskClick, currentTaskId, isChecked, onChecked } = props;
    const handleTaskChecked = (id: string) => { onChecked(id) };

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
                <Checkbox
                    onChange={e => handleTaskChecked(task.id)}
                    isChecked={isChecked}
                />
                <Text
                    borderColor={"blue"}
                    w={"100%"}
                    p={1}
                    fontSize={"0.9em"}
                    textDecoration={isChecked ? "line-through" : "none"}
                    opacity={isChecked ? 0.5 : 0.9}
                >
                    {task.label}
                </Text>
            </HStack>
        </Box >
    )

}