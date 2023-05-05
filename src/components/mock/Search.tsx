import { HStack, Wrap, WrapItem } from '@chakra-ui/react'
import { SearchTag } from './SearchTag'
import type { tag } from '../../pages/mock'
import { useEffect } from 'react';


export function Search(props: any) {
    const { tags, searchTags, changeSearchTag, ...restProps } = props;
    const handleTagClose = (tagId: string) => changeSearchTag(searchTags.filter((t: string) => t !== tagId))

    return (
        <HStack {...restProps}
            justifyContent={'space-between'}
        >
            <Wrap>
                {searchTags.length === 1 && searchTags[0] === "000" &&
                    < WrapItem >
                        <SearchTag
                            tag={{ id: "000", name: "ALL" }}
                            isCloseEnabled={false}
                            bg={"red"} />
                    </WrapItem>
                }
                {searchTags.length === 0 &&
                    <WrapItem >
                        <SearchTag
                            tag={{ id: "999", name: "タグなし" }}
                            isCloseEnabled={false}
                            bg={"green.300"} />
                    </WrapItem>
                }
                {searchTags.length >= 1 && searchTags[0] !== "000" && tags &&
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
            </Wrap>
        </HStack >
    )
}