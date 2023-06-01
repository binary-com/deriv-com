import React, { useMemo } from 'react'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { flex_container, image_container, image_phone } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'

const MarketWrapper = ({ item }: { item: HomepageBannerType }) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const renderBanner = useMemo(() => {
        return (
            <>
                {is_mobile_or_tablet ? (
                    <Flex.Box direction="col-reverse" justify="center">
                        <BannerText item={item} />

                        <div className={image_phone}>{item.image_phone}</div>
                    </Flex.Box>
                ) : (
                    <Flex.Box container="fluid" direction="row" justify="start" align="start">
                        <BannerText item={item} />
                        <div className={image_container}>{item.image_tablet}</div>
                    </Flex.Box>
                )}
            </>
        )
    }, [is_mobile_or_tablet])
    return <Container.Fixed className={flex_container}>{renderBanner}</Container.Fixed>
}

export default MarketWrapper
