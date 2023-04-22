import { Tag, TagLabel, TagCloseButton, TagLeftIcon } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'

export function SearchTag(props: any) {
    const { tagName } = props;
    return (
        <Tag
            size={['sm', 'sm']}
            borderRadius='full'
            variant='solid'
            // colorScheme={'cyan'}
            bg={"blue.300"}
        >
            <TagLeftIcon as={AttachmentIcon} />
            <TagLabel>{tagName}</ TagLabel>
            <TagCloseButton />
        </Tag >
    )
}