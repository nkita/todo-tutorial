import { Tag, TagLabel, TagCloseButton, TagLeftIcon } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'

export function SearchTag(props: any) {
    const { tag, onClickTagClose, ...restProps } = props;
    const handleClickCloseButton = () => {
        onClickTagClose(tag.id)
    }
    return (
        <Tag
            {...restProps}
            size={['sm', 'sm']}
            borderRadius='full'
            variant='solid'
        >
            <TagLeftIcon as={AttachmentIcon} />
            <TagLabel>{tag.name}</ TagLabel>
            <TagCloseButton
                onClick={handleClickCloseButton}
            />
        </Tag >
    )
}