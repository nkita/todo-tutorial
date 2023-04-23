import {
    Box,
    Checkbox,
    HStack,
    Text,
    Editable,
    EditablePreview,
    EditableInput
} from '@chakra-ui/react'
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
                <Editable
                    defaultValue={task.label}
                    w={'100%'}
                    >
                    <EditablePreview />
                    <EditableInput />
                </Editable>
            </HStack>
        </Box>
    )

}