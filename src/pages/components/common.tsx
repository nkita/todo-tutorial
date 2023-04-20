import {
    Button
} from '@chakra-ui/react'

export function SideButton(props: any) {
    return (
        <Button
            ml={3}
            colorScheme='teal'
            variant='ghost'
            justifyContent="flex-start"
            w={170}
            fontSize={".875em"}
            _hover={{ bg: 'blue.100' }}
            {...props}
        >
            {props.children}
        </Button>
    )
}
