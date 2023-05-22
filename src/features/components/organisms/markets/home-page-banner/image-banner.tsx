import React from 'react'
import { HomepageBannerType } from './types'
import { item_image } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'

interface ImageBannerProps {
    item: HomepageBannerType
}
const ImageBanner = ({ item }: ImageBannerProps) => {
    return <Flex.Box pt="10x">{item.image}</Flex.Box>
}

export default ImageBanner
