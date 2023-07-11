import React from 'react'
import { OptionContentItemData } from './type'
import { content_container } from './styles.module.scss'
import OptionContentItem from './option-content.item'
import Flex from 'features/components/atoms/flex-box'

export interface OptionsContentProps {
    items: OptionContentItemData[]
}

const OptionsContent = ({ items }: OptionsContentProps) => {
    return (
        <Flex.Box
            direction="col"
            container="fixed"
            justify="center"
            align="center"
            gap="40x"
            className={content_container}
            pt="12x"
            pb="24x"
            style={{ maxInlineSize: '100rem', marginInline: 'auto' }}
        >
            {items.map((contentItem) => (
                <OptionContentItem item={contentItem} key={contentItem.title} />
            ))}
        </Flex.Box>
    )
}

export default OptionsContent
