import { useEffect, useRef, useState } from 'react'
import {
    Button,
    Textarea,
    Input,
    Box,
    Flex,
    IconButton,
    PopoverTrigger,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    PopoverContent,
    List,
    ListItem,
    ListIcon,
    Kbd,
} from '@chakra-ui/react'
import { AddIcon, CheckCircleIcon, AttachmentIcon } from "@chakra-ui/icons";
import Todo from '@/pages/dndkit';


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
    const { setTags, unsetTags, tagAdd, tags, taskTagUpdate } = props
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState("");
    const [enableAddTag, setEnableAddTag] = useState(false);

    const keywordRest = () => {
        if (ref.current) ref.current.value = ""
        setKeyword("")
    }
    const handleTagAdd = (tagid: string) => taskTagUpdate([tagid, ...setTags.map((m: any) => m.id)])
    const handleTagDelete = (tagid: string) => taskTagUpdate([...setTags.map((m: any) => m.id).filter((m: string) => m !== tagid)])
    const handleNewTagAdd = () => {
        if (ref.current && ref.current.value !== "") {
            const id = tags.length + 1
            tagAdd({
                id: id,
                name: ref.current.value
            })
            handleTagAdd(id)
            ref.current.value = "";
        }
    }
    const handeOnChangeKeyword = (e: any) => {
        setKeyword(e.currentTarget.value)
        const flg = tags.filter((t: any) => t.name === e.currentTarget.value)
        setEnableAddTag((flg.length === 0 && keyword !== "") ? true : false)
    }
    const handleOnSubmit = (e: any) => {
        if (enableAddTag) handleNewTagAdd()
        e.preventDefault();
    }
    return (
        <Popover
            initialFocusRef={ref}
            onOpen={keywordRest}
        >
            <PopoverTrigger>
                <Button
                    colorScheme={"twitter"}
                    size={"xs"}
                    outline={"none"}
                    onClick={e => setIsOpen(true)}
                >Add tag</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                    <form onSubmit={e => handleOnSubmit(e)}>
                        <Input
                            w={"90%"}
                            ref={ref}
                            size={"sm"}
                            onChange={e => handeOnChangeKeyword(e)}
                        />
                    </form>
                </PopoverHeader>
                <PopoverBody>
                    <Box
                        maxH={300}
                        overflow={"scroll"}
                    >
                        <List spacing={1}>
                            {enableAddTag &&
                                <ListItem
                                    _hover={{ bg: "blue.50" }}
                                    cursor={"pointer"}
                                    p={2}
                                    fontSize={"sm"}
                                    onClick={e => handleNewTagAdd()}
                                >
                                    <ListIcon as={AddIcon} color={"blue.300"} />
                                    Add New Tag. (press <Kbd>enter</Kbd>)
                                </ListItem>
                            }
                            {unsetTags &&
                                unsetTags.map((m: any) => {
                                    if (!keyword || ~m.name.indexOf(keyword)) {
                                        return (
                                            <ListItem
                                                key={m.id}
                                                _hover={{ bg: "blue.50" }}
                                                cursor={"pointer"}
                                                p={2}
                                                fontSize={"sm"}
                                                onClick={e => handleTagAdd(m.id)}
                                            >
                                                <ListIcon as={AttachmentIcon} color={"blue.300"} />
                                                {m.name}
                                            </ListItem>
                                        )
                                    }
                                })
                            }
                            {setTags &&
                                setTags.map((m: any) => {
                                    if (!keyword || ~m.name.indexOf(keyword)) {
                                        return (
                                            <ListItem
                                                key={m.id}
                                                _hover={{ bg: "blue.50" }}
                                                cursor={"pointer"}
                                                p={2}
                                                fontSize={"sm"}
                                                onClick={e => handleTagDelete(m.id)}
                                            >
                                                <ListIcon as={CheckCircleIcon} color={"blue.300"} />
                                                {m.name}
                                            </ListItem>
                                        )
                                    }
                                })
                            }
                        </List>
                    </Box>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    );
}
