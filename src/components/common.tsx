import { useEffect, useRef, useState } from 'react'
import {
    Button,
    Editable,
    EditablePreview,
    EditableTextarea,
    FormControl,
    Textarea,
    Skeleton,
    Input,
    IconButton
} from '@chakra-ui/react'

export function SideButton(props: any) {
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
                {...props}
            >
                {props.children}
            </Button>

        </>

    )
}

export function ExTextArea(props: any) {
    const { text, placeholder } = props;
    const ref = useRef<HTMLTextAreaElement>(null);
    const [rows, setRows] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        onChangeTodoDetail()
        setIsLoading(true)
    }, [])
    const onChangeTodoDetail = () => {
        if (ref.current) {
            const va = ref.current.value;
            setRows(va.split('\n').length)
        }
    }

    return (
        <>
            <Skeleton
                {...props}
                w={"100%"}
                size={10}
                isLoaded={isLoading}
            >
                <Textarea
                    {...props}
                    w={"100%"}
                    defaultValue={text}
                    outline={"none"}
                    borderColor={"white"}
                    resize={"none"}
                    onChange={onChangeTodoDetail}
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
            </Skeleton>
        </>
    )
}
export function ExInput(props: any) {
    const { text, placeholder } = props;
    const ref = useRef<HTMLTextAreaElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
    }, [])

    return (
        <>
            <Skeleton
                {...props}
                w={"100%"}
                size={10}
                isLoaded={isLoading}
            >
                <FormControl>
                    <Input
                        onSubmit={e => {
                            console.log("asdfasd")
                            e.preventDefault();
                        }}
                        {...props}
                        w={"100%"}
                        defaultValue={text}
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
                </FormControl>
            </Skeleton>
        </>
    )
}
