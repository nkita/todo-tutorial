import {
    Box,
    Checkbox,
    HStack,
    IconButton,
    Text
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { ExInput } from '../common';
export default function TaskList(props: any) {
    const { task } = props;
    return (
        <Box
            w={'100%'}
            bg={'white'}
            rounded={5}
            p={2}
            boxShadow={'base'}
            _hover={{
                bg: "blue.50",
                cursor:"pointer"
            }}
            transition={"ease 0.3s"}
        >
            <HStack>
                <Checkbox />
                <Text
                    w={"100%"}
                    p={1}
                    fontSize={"0.9em"}
                >
                    {task.label}
                </Text>
                {/* <ExInput fontSize={"sm"} text={task.label} /> */}

            </HStack>
        </Box>
    )

}