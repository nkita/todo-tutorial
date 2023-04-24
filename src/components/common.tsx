import { useEffect, useRef, useState } from 'react'
import {
    Button,
    Editable,
    EditablePreview,
    EditableTextarea
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

export function ExTextArea(props: any) {
    const { text } = props;
    const ref = useRef<HTMLTextAreaElement>(null);
    const [rows, setRows] = useState(0);

    useEffect(() => {
        onChangeTodoDetail()
    })
    const onChangeTodoDetail = () => {
        if (ref.current) {
            const va = ref.current.value;
            setRows(va.split('\n').length)
        }
    }

    return (
        <Editable
            {...props}
            h={'100%'}
            defaultValue={text}
            outline={"none"}
            w={"100%"}
        >
            <EditablePreview
                whiteSpace={"break-spaces"}
                overflow-wrap={"break-word"}
                pl={1}
            />
            <EditableTextarea
                resize={"none"}
                value={text}
                onChange={onChangeTodoDetail}
                rows={rows}
                ref={ref}
                pl={1}
                _focus={{
                    boxShadow: " 0 0 1px 1px #BEE3F8",
                    outline: "0",
                    padding: "1px",
                    width:"100%"
                }}
            />
        </Editable>
    )
}
