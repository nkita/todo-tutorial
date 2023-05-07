import {
    Box,
    InputGroup,
    Input,
    InputRightElement,
    Link as LinkC,
    IconButton,
} from "@chakra-ui/react"
import {
    SmallAddIcon
} from "@chakra-ui/icons"
import {
    Search,
    TaskList
} from '.'

export function Main(props: any) {
    const {
        tags,
        tasks,
        handleTaskClick,
        handleSearchTagUpdate,
        currentTaskId,
        searchTags,
        ...restProps
    } = props;

    return (
        <Box
            {...restProps}
            h={"100vh"}
        >
            <InputGroup>
                <Input
                    pr='7rem'
                    rounded={10}
                    bg={"gray.50"}
                    placeholder='Add task...'
                    _hover={{
                        borderColor: "gray.400"
                    }}
                    _focus={{
                        bg: "gray.50",
                        borderColor: "gray.400",
                        boxShadow: "none",
                    }}
                />
                <InputRightElement width='6rem'>
                    <LinkC width='4rem' fontSize={10}>
                        詳細を追加
                    </LinkC>
                    <IconButton
                        variant={"ghost"}
                        isRound={true}
                        size={"sm"}
                        mr={2}
                        aria-label="Add Task" icon={<SmallAddIcon />} />
                </InputRightElement>
            </InputGroup>
            <Search
                tags={tags}
                pt={5}
                searchTags={searchTags}
                changeSearchTag={handleSearchTagUpdate}
            />
            <TaskList
                tasks={tasks}
                currentTaskId={currentTaskId}
                handleTaskClick={handleTaskClick}
                searchTags={searchTags}
                pt={5} />
        </Box >
    )
}