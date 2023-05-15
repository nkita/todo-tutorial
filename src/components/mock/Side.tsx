import {
    Box,
    Text,
    Heading,
    VStack,
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
                w={"100%"}
                h={"100vh"}
                pb={20}
                className='scroll_bar'
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
            >
                <Box
                    w={"100%"}
                >
                    <Heading
                        size={"md"}
                        textAlign={"left"}
                        p={5}
                    >タスク
                    </Heading>
                    <SideButton
                        isSearchTag={false}
                        tag={{ id: "000", name: "ALL" }}
                        searchTags={searchTags}
                        searchTagUpdate={searchTagUpdate}
                    >
                        すべて
                    </SideButton>
                    <SideButton
                        isSearchTag={false}
                        searchTags={searchTags}
                        searchTagUpdate={searchTagUpdate}
                    >
                        タグなし
                    </SideButton>
                    {/* <SideButton>
                        ブックマーク
                    </SideButton> */}
                    <Heading
                        size={"md"}
                        textAlign={"left"}
                        p={5}
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
                                        isSearchTag={true}
                                    >
                                        {t.name}
                                    </SideButton>
                                )
                            })
                        }
                    </Box>
                </Box>
            </VStack >
        </Box >
    )
}