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
                        if (searchTags.length != 0 || searchTags.includes(t.id)) {
                            return (
                                <WrapItem key={t.id}>
                                    <SearchTag tag={t} onClickTagClose={handleTagClose} />
                                </WrapItem>
                            )
                        }
                    })
                }
            </Wrap>
        </HStack >
    )
}