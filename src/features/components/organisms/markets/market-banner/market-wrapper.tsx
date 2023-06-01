import React from 'react'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { flex_container } from './styles.module.scss'
import MobileBanner from './mobile-banner'
import DesktopWrapper from './desktop-banner'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'

const MarketWrapper = ({ item }: { item: HomepageBannerType }) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    return (
        <Container.Fixed className={flex_container}>
            {is_mobile_or_tablet ? <MobileBanner item={item} /> : <DesktopWrapper item={item} />}
        </Container.Fixed>
    )
}

export default MarketWrapper
