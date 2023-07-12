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
            justify="center"
            align="center"
            gap="20x"
            className={content_container}
            pt="6x"
            pb="12x"
            md={{
                pt: '12x',
                pb: '24x',
            }}
        >
            {items.map((contentItem) => (
                <OptionContentItem item={contentItem} key={contentItem.title} />
            ))}
        </Flex.Box>
    )
}

export default OptionsContent
