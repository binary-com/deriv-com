import React from 'react'
import { OptionContentItemData } from './type'
import { content_container } from './styles.module.scss'
import OptionContentItem from './option-content.item'
import Flex from 'features/components/atoms/flex-box'
import { get_lang_direction } from 'components/localization'

export interface OptionsContentProps {
    items: OptionContentItemData[]
}

const OptionsContent = ({ items }: OptionsContentProps) => {
    return (
        <Flex.Box
            direction="col"
            justify="center"
            gap="20x"
            className={content_container}
            pb="12x"
            md={{
                padding: '12x',
            }}
            dir={get_lang_direction()}
        >
            {items.map((contentItem) => (
                <OptionContentItem item={contentItem} key={contentItem.title} />
            ))}
        </Flex.Box>
    )
}

export default OptionsContent
