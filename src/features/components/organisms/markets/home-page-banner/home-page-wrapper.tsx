import React from 'react'
import ImageBanner from './image-banner'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { item_container, flex_container } from './styles.module.scss'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'

interface HomepageBannerProps {
    item: HomepageBannerType
}

const HomePageWrapper = ({ item }: HomepageBannerProps) => {
    return (
        <Container.Fluid as="section" bgcolor="white" className={item_container}>
            <Flex.Box className={flex_container} direction="col-reverse" lg={{ direction: 'row' }}>
                <BannerText item={item} />
                <ImageBanner item={item} />
            </Flex.Box>
        </Container.Fluid>
    )
}

export default HomePageWrapper
