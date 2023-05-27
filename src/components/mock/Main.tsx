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
import type { task } from '../../pages/mock'
import { useEffect, useRef, useState } from "react"

export function Main(props: any) {
    const [value, setValue] = useState("")
    const ref = useRef<HTMLInputElement>(null)
    const {
        tags,
        tasks,
        handleTaskClick,
        handleSearchTagUpdate,
        handleTaskAdd,
        currentTaskId,
        searchTags,
        onCompleted,
        onUnCompleted,
        completedTasks,
        ...restProps
    } = props;

    const handleChange = () => ref.current && setValue(ref.current.value)

    const handleSubmit = (e: any) => {
        const _searchTags = searchTags.filter((id: string) => id !== "000")
        if (value) {
            const task = {
                id: tasks.length + 1,
                label: value,
                detail: "",
                tags: _searchTags,
                limitDate: "2023-06-10",
                createDate: "2023-04-10 23:10:10",
                updateDate: "2023-05-10"
            }
            handleTaskAdd(task)
            if (ref.current) ref.current.value = "";
            setValue("")
        }
        e.preventDefault();
    }
    return (
        <Box
            {...restProps}
            h={"100vh"}
        >
            <form
                onSubmit={handleSubmit}
            >
                <InputGroup>
                    <Input
                        ref={ref}
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
                        onChange={handleChange}
                    />
                    <InputRightElement>
                        <IconButton
                            onClick={handleSubmit}
                            variant={"ghost"}
                            isRound={true}
                            size={"sm"}
                            mr={2}
                            aria-label="Add Task" icon={<SmallAddIcon />} />
                    </InputRightElement>
                </InputGroup>
            </form>
            <Search
                tags={tags}
                pt={5}
                pb={5}
                searchTags={searchTags}
                changeSearchTag={handleSearchTagUpdate}
            />
            <TaskList
                tasks={tasks}
                completedTasks={completedTasks}
                currentTaskId={currentTaskId}
                handleTaskClick={handleTaskClick}
                searchTags={searchTags}
                onCompleted={onCompleted}
                onUnCompleted={onUnCompleted}
                sx={{
                    overflow: "scroll",
                    overflowX: "hidden",
                    '_hover': {
                        '&::-webkit-scrollbar': {
                            width: "5px",
                            borderRadius: '5'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: `rgba(0, 0, 0, 0.05)`,
                            borderRadius: '5'
                        },
                    },
                    '&::-webkit-scrollbar': {
                        width: "5px",
                        borderRadius: '5'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `rgba(0, 0, 0, 0.00)`,
                        borderRadius: '5'
                    },
                }}
            />
        </Box >
    )
}