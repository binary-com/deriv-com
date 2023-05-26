import React from 'react'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { flex_container } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'

interface HomepageBannerProps {
    item: HomepageBannerType
}

const HomePageWrapper = ({ item }: HomepageBannerProps) => {
    return (
        <Container.Fixed>
            <Flex.Box
                container="fluid"
                className={flex_container}
                direction="col-reverse"
                md={{ direction: 'row', justify: 'end', align: 'start' }}
            >
                <BannerText item={item} />
                {item.image}
            </Flex.Box>
        </Container.Fixed>
    )
}

export default HomePageWrapper
