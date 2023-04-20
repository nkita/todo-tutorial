import { HStack, Wrap, WrapItem } from '@chakra-ui/react'
import { SearchTag } from './SearchTag'
export function Search(props: any) {
    const { tags, ...restProps } = props;
    return (
        <HStack {...restProps}
            justifyContent={'space-between'}
        >
            <Wrap>
                {tags &&
                    tags.map(t => {
                        return (
                            <WrapItem key={t.id}>
                                <SearchTag tagName={t.name} />
                            </WrapItem>
                        )
                    })
                }
            </Wrap>

        </HStack >
    )
}