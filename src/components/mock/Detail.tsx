import { useEffect, useRef, useState } from 'react'
import {
    Box,
    Wrap,
    WrapItem, Editable,
    Textarea,
    EditablePreview,
    EditableTextarea,
    EditableInput
} from '@chakra-ui/react'
import { SearchTag } from './SearchTag'
import { ExTextArea, ExInput } from '../common'
import type { task, tag } from '../../pages/mock'
export function Detail(props: any) {
    const { task, tags } = props

    return (
        <Box
            {...props}
        >
            <Box
                bg={'white'}
                borderRadius={5}
                boxShadow={'base'}
                fontSize={'0.96em'}
                // Todo Detail Height
                maxH={"98%"}
                overflow={"scroll"}
                overflowX={"hidden"}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: "5px",
                        backgroundColor: 'white',
                        borderRadius: '5'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        borderRadius: '5'
                    },
                }}
            >

                <Box p={3}>
                    <ExInput
                        fontSize={"sm"}
                        fontWeight={"bold"}
                        task={task}
                        placeholder="タスクを追加"
                    />
                </Box>
                <Box p={3}>
                    <ExTextArea
                        fontSize={"sm"}
                        task={task}
                        placeholder="詳細を追加"
                    />
                </Box>
                <Box p={4}>
                    <Wrap>
                        {task.tags &&
                            task.tags.map((tagid: string) => {
                                return (
                                    tags.map((t: tag) => {
                                        if (t.id === tagid) {
                                            return (
                                                <WrapItem key={t.id}>
                                                    <SearchTag tagName={t.name} />
                                                </WrapItem>
                                            )
                                        }
                                    })
                                )
                            })
                        }
                    </Wrap>
                </Box>
            </Box>
        </Box >
    )
}