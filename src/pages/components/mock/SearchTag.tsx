import { Tag, IconButton, Box, Flex, Spacer } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

export function SearchTag(props: any) {
    const { tagName } = props;
    return (
        <Tag
        >
            <Flex>
                <Box>
                    {tagName}
                </Box>
                <Spacer />
                <Box>
                    <IconButton
                        isRound={true}
                        size={"xs"}
                        mr={2}
                        aria-label="Add Task" icon={<SmallCloseIcon />}
                    />
                </Box>
            </Flex>
        </Tag>
    )
}