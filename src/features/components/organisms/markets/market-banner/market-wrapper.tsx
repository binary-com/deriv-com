import React from 'react'
import BannerText from './banner-text'
import { HomepageBannerType } from './types'
import { image_container, item_flex } from './styles.module.scss'
import useBreakpoints from 'components/hooks/use-breakpoints'
import FlexBox from 'features/components/atoms/flex-box'

interface HomepageBannerProps {
    item: HomepageBannerType
}

const MarketWrapper = ({ item }: HomepageBannerProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    return (
        <FlexBox.Box
            className={item_flex}
            direction="col-reverse"
            justify="center"
            pt={'40x'}
            md={{ direction: 'row', justify: 'between', align: 'center', pt: '40x' }}
            lg={{ justify: 'end' }}
        >
            <BannerText item={item} />
            <FlexBox.Item className={image_container}>
                {is_mobile_or_tablet ? item.image_phone : item.image_tablet}{' '}
            </FlexBox.Item>
        </FlexBox.Box>
    )
}

export default MarketWrapper
