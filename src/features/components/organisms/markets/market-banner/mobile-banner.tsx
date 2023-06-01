import React from 'react'
import BannerText from './banner-text'
import { image_phone } from './styles.module.scss'
import { HomepageBannerType } from './types'
import Flex from 'features/components/atoms/flex-box'

const MobileBanner = ({ item }: { item: HomepageBannerType }) => {
    return (
        <>
            <Flex.Box direction="col-reverse" justify="center">
                <BannerText item={item} />
                <div className={image_phone}>{item.image_phone}</div>
            </Flex.Box>
        </>
    )
}

export default MobileBanner
