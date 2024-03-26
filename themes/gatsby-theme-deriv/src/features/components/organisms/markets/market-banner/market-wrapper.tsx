import React from 'react'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { flex_container, image_container, image_phone } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

const MarketWrapper = ({ item }: { item: HomepageBannerType }) => {
    return (
        <Container.Fixed className={flex_container}>
            <Flex.Box visible="phone-and-tablet" direction="col-reverse" justify="center">
                <BannerText item={item} />

                <div className={image_phone}>{item.image_phone}</div>
            </Flex.Box>
            <Flex.Box
                visible="larger-than-tablet"
                container="fluid"
                direction="row"
                justify="start"
                align="start"
                dir="ltr"
            >
                <BannerText item={item} />
                <div className={image_container}>{item.image_tablet}</div>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default MarketWrapper
