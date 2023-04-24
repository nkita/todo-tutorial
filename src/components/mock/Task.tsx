import {
    Box,
    Checkbox,
    HStack,
    IconButton
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { ExTextArea } from '../common';
export default function TaskList(props: any) {
    const { task } = props;
    return (
        <Box
            w={'100%'}
            bg={'white'}
            rounded={5}
            p={2}
            boxShadow={'base'}
        >
            <HStack>
                <Checkbox />
                <ExTextArea fontSize={"sm"} text={task.label} />
                <IconButton
                    aria-label='Edit'
                    size={"sm"}
                    variant={"unstyled"}
                    icon={<EditIcon />} />
            </HStack>
        </Box>
    )

}