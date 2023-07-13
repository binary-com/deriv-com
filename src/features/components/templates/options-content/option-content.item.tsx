import React from 'react'
import { OptionContentItemData } from './type'
import SingleOptionContentItem from './single-content-option.item'
import SectionOptionContentItem from './section-content-option.item'

const OptionContentItem = ({ item }: { item: OptionContentItemData }) => {
    return item.type === 'single' ? (
        <SingleOptionContentItem item={item} />
    ) : (
        <SectionOptionContentItem item={item} />
    )
}

export default OptionContentItem
