import {
    Box,
    Text,
    Heading,
    VStack,
    IconButton,
} from '@chakra-ui/react'
import { SideButton } from '../common'
import { AttachmentIcon, PlusSquareIcon } from '@chakra-ui/icons'
import type { tag } from '../../pages/mock'

export function Side(props: any) {
    const { tags, searchTags, searchTagUpdate, ...restProps } = props

    return (
        <Box
            {...restProps}
        >
            <VStack
                h={"100vh"}
                pb={20}
                overflow={"scroll"}
                overflowX={"hidden"}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: "5px",
                        borderRadius: '5'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        borderRadius: '5'
                    },
                }}
            >

                <Box>
                    <Heading
                        size={"md"}
                        textAlign={"left"}
                        p={6}
                    >タスク
                    </Heading>
                    <SideButton
                        tag={{ id: "000", name: "ALL" }}
                        searchTags={searchTags}
                        searchTagUpdate={searchTagUpdate}
                    >
                        すべて
                    </SideButton>
                    <SideButton
                        searchTags={searchTags}
                        searchTagUpdate={searchTagUpdate}
                    >
                        タグなし
                    </SideButton>
                    <SideButton>
                        ブックマーク
                    </SideButton>
                    <Heading
                        size={"md"}
                        textAlign={"left"}
                        p={6}
                    >タグ</Heading>
                    <Box>
                        {!tags &&
                            <Text pl={6}>なし</Text>
                        }
                        {tags &&
                            tags.map((t: tag) => {
                                return (
                                    <SideButton
                                        key={t.id}
                                        tag={t}
                                        leftIcon={<AttachmentIcon />}
                                        searchTags={searchTags}
                                        searchTagUpdate={searchTagUpdate}
                                    >
                                        {t.name}
                                    </SideButton>
                                )
                            })
                        }
                    </Box>
                </Box>
            </VStack>
        </Box>
    )
}