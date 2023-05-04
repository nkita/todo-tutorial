import { HStack, Wrap, WrapItem } from '@chakra-ui/react'
import { SearchTag } from './SearchTag'
import type { tag } from '../../pages/mock'


export function Search(props: any) {
    const { tags, searchTags, ...restProps } = props;
    const handleTagClose = (tagId: string) => {
        console.log("Search:" + tagId)
    }
    return (
        <HStack {...restProps}
            justifyContent={'space-between'}
        >
            <Wrap>
                {tags &&
                    tags.map((t: tag) => {
                        if (searchTags.includes(t.id)) {
                            return (
                                <WrapItem key={t.id}>
                                    <SearchTag
                                        tag={t}
                                        onClickTagClose={handleTagClose}
                                        bg={"blue.300"} />
                                </WrapItem>
                            )
                        }
                    })
                }
                {searchTags.length === 0 &&
                    <WrapItem >
                        <SearchTag
                            tag={{ id: "000", name: "ALL" }}
                            isCloseEnabled={false}
                            onClickTagClose={handleTagClose}
                            bg={"red"} />
                    </WrapItem>
                }
            </Wrap>
        </HStack >
    )
}