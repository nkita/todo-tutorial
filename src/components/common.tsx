import { useEffect, useRef, useState } from 'react'
import {
    Button,
    Textarea,
    Input,
} from '@chakra-ui/react'

export function SideButton(props: any) {
    const { tag, searchTags, searchTagUpdate, ...restProps } = props;
    const handleOnClick = (id: string) => searchTagUpdate([id])
    return (
        <>
            <Button
                ml={3}
                colorScheme='teal'
                variant='ghost'
                justifyContent="flex-start"
                w={170}
                fontSize={".875em"}
                _hover={{ bg: 'blue.200', color: "white" }}
                {...restProps}
                onClick={e => handleOnClick(tag.id)}
            >
                {props.children}
            </Button>

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
