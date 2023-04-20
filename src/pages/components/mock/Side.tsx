import {
    Box,
    Text,
    Heading,
    VStack,
} from '@chakra-ui/react'
import { SideButton } from '../common'
import { AttachmentIcon } from '@chakra-ui/icons'

export function Side(props: any) {
    const { tags, ...restProps } = props

    return (
        <Box
            {...restProps}
        >
            <VStack
                h={"100vh"}
                pb={20}
                overflow={"scroll"}>
                <Box>
                    <Heading
                        size={"md"}
                        textAlign={"left"}
                        p={6}
                    >タスク
                    </Heading>
                    <SideButton>
                        すべて
                    </SideButton>
                    <SideButton>
                        重要
                    </SideButton>
                    <SideButton>
                        今日期限
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
                            tags.map(t => {
                                return (
                                    <SideButton key={t.id}
                                        leftIcon={<AttachmentIcon />} >
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