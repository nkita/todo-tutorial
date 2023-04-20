import {
    Box,
    Heading,
} from '@chakra-ui/react'
export function Header(props: any) {
    return (
        <Box
            {...props}
        >
            <Heading
                margin={2}
                textAlign={['center', 'center', 'left']}
                size={["sm", "md"]}
            >TagToDo</Heading>
        </Box >
    )
}