import { Box, Checkbox, HStack, Text } from '@chakra-ui/react'
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
                <Text>
                    {task.label}
                </Text>
            </HStack>
        </Box>
    )

}