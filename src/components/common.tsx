import { useEffect, useRef, useState } from 'react'
import {
    Button,
    Textarea,
    Input,
    Box,
    Flex,
    IconButton,
} from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons";

export function SideButton(props: any) {
    const { tag, isSearchTag, searchTags, searchTagUpdate, leftIcon, ...restProps } = props;
    const handleOnClick = (id: string | null) => searchTagUpdate(id ? [id] : [])
    const handleOnAddClick = (id: string | null) => {
        // 「すべて」のタグが含まれていた場合一旦削除
        const _searchTags = searchTags.filter((id: string) => id !== "000")
        searchTagUpdate(Array.from(new Set([..._searchTags, id])))
    }

    return (
        <>
            <Flex
                w={"100%"}
                pl={5}
                pr={5}
                lineHeight={8}
                borderRadius={3}
                _hover={{ bg: 'blue.200', color: "white" }}
                justifyContent={"space-between"}
                alignItems={"baseline"}
            >
                <Box
                    pr={3}
                >
                    {leftIcon}
                </Box>
                <Box
                    w={"100%"}
                    cursor={"pointer"}
                    onClick={e => handleOnClick(tag ? tag.id : null)}
                >
                    {props.children}
                </Box>
                {isSearchTag &&
                    <IconButton
                        colorScheme='blue'
                        variant={"ghost"}
                        aria-label='Add Search Tag'
                        fontSize={"10px"}
                        size={"xs"}
                        isRound={true}
                        onClick={e => handleOnAddClick(tag.id)}
                        icon={<AddIcon color={"blackAlpha.500"} />}
                    />
                }
            </Flex >
        </>
    )
}

export function ExTextArea(props: any) {
    const { task, placeholder, handleTaskUpdate, ...restProps } = props;
    const ref = useRef<HTMLTextAreaElement>(null);
    const [rows, setRows] = useState(1);
    const [detail, setDetail] = useState(task.detail);
    const [newTask, setNewTask] = useState(task);

    useEffect(() => {
        setRows(task.detail.split('\n').length)
        setDetail(task.detail)
        setNewTask(task)
    }, [task])

    const handleChange = () => {
        if (ref.current) {
            const v = ref.current.value;
            setRows(v.split('\n').length)
            setDetail(v)
        }
    }

    const handleSubmit = (e: any) => {
        newTask.detail = detail
        handleTaskUpdate(newTask)
        ref.current?.blur()
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Textarea
                    {...restProps}
                    onBlur={handleSubmit}
                    w={"100%"}
                    value={detail}
                    outline={"none"}
                    borderColor={"white"}
                    resize={"none"}
                    onChange={handleChange}
                    rows={rows}
                    ref={ref}
                    p={2}
                    placeholder={placeholder}
                    boxShadow={"none"}
                    _hover={{
                        p: "2",
                        borderColor: "gray.400"
                    }}
                    _focus={{
                        p: "2",
                        bg: "gray.50",
                        borderColor: "gray.400",
                        boxShadow: "none",
                    }}
                />
            </form>
        </>
    )
}
export function ExInput(props: any) {
    const { task, placeholder, handleTaskUpdate, ...restProps } = props;
    const ref = useRef<HTMLTextAreaElement>(null);
    const [label, setLabel] = useState(task.label);
    const [newTask, setNewTask] = useState(task);

    useEffect(() => {
        setLabel(task.label)
        setNewTask(task)
        ref.current?.focus()
    }, [task])

    const handleChange = () => ref.current && setLabel(ref.current.value)

    const handleSubmit = (e: any) => {
        newTask.label = label
        handleTaskUpdate(newTask)
        ref.current?.blur()
        e.preventDefault();
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}>
                <Input
                    {...restProps}
                    w={"100%"}
                    onBlur={handleSubmit}
                    onChange={handleChange}
                    value={label}
                    outline={"none"}
                    borderColor={"white"}
                    resize={"none"}
                    ref={ref}
                    p={2}
                    placeholder={placeholder}
                    boxShadow={"none"}
                    _hover={{
                        p: "2",
                        borderColor: "gray.400"
                    }}
                    _focus={{
                        p: "2",
                        bg: "gray.50",
                        borderColor: "gray.400",
                        boxShadow: "none",
                    }}
                />
            </form>
        </>
    )
}

export function InputTag(props: any) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Box
            position={"relative"}
        >
            {!isOpen &&
                <Button
                    h={"10px"}
                    onClick={e => setIsOpen(true)}
                >
                    click
                </Button>
            }
            {isOpen &&
                <>
                    <Button
                        h={"10px"}
                        onClick={e => setIsOpen(false)}
                    >click
                    </Button>
                    <Box
                        position={"fixed"}
                        w={10}
                        h={200}
                        bg={"red"}
                        boxShadow={"dark-lg"}
                    >
                    </Box>
                </>
            }
        </Box>
    );
}
