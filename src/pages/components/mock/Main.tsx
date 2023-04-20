import {
    Box,
    InputGroup,
    Input,
    Button,
    InputRightElement,
    Link as LinkC,
    IconButton,
    Textarea
} from "@chakra-ui/react"
import {
    SmallAddIcon
} from "@chakra-ui/icons"
import {
    Search,
    TaskList
} from '../mock'
import Link from "next/link"
export function Main(props: any) {
    const { tags, tasks, ...restProps } = props;
    return (
        <Box
            {...restProps}
            h={"100vh"}
        >
            <InputGroup
                size='sm'>
                <Input
                    pr='7rem'
                    borderRadius={"full"}
                    bg={"gray.50"}
                    borderRight={"0px"}
                    placeholder='Add task...'
                    boxShadow={"md"}
                />
                <InputRightElement width='6rem'>
                    <LinkC width='4rem' fontSize={10}>
                        詳細を追加
                    </LinkC>
                    <IconButton
                        bg={"green.200"}
                        isRound={true}
                        size={"xs"}
                        mr={2}
                        aria-label="Add Task" icon={<SmallAddIcon />} />
                </InputRightElement>
            </InputGroup>
            <Search
                tags={tags}
                pt={5}
            />
            <TaskList tasks={tasks} pt={5} />
        </Box >
    )
}