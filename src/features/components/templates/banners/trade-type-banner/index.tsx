import React from 'react'
import { trade_type_hero, trade_type_hero_img } from './trade-type.module.scss'
import { banner_images } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { TString } from 'types/generics'

const TradeTypeBanner = ({ title }: { title: TString }) => {
    const { is_mobile } = useBreakpoints()
    return (
        <FlexBox.Box as="section" className={trade_type_hero} align="center" justify="center">
            <div className={trade_type_hero_img}>
                {is_mobile ? banner_images['banner_mobile'] : banner_images['banner']}
            </div>
            <Typography.Heading textcolor="brand" size={is_mobile ? 'large' : 'xlarge'}>
                <Localize translate_text={title} />
            </Typography.Heading>
        </FlexBox.Box>
    )
}

export default TradeTypeBanner
