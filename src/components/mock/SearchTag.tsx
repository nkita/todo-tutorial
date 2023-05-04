import { Tag, TagLabel, TagCloseButton, TagLeftIcon, useStatStyles } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';

export function SearchTag(props: any) {
    const { tag, onClickTagClose, isCloseEnabled = true, ...restProps } = props;
    const [close, setClose] = useState(isCloseEnabled)
    useEffect(() => {
        setClose(isCloseEnabled)
    }, [isCloseEnabled])
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
            {close &&
                <TagCloseButton
                    onClick={handleClickCloseButton}
                />
            }
        </Tag >
    )
}