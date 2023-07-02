import React from 'react'
import { trade_type_hero, trade_type_hero_img } from './trade-type.module.scss'
import { banner_images } from './data'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { TString } from 'types/generics'

type BannerType = {
    title: TString
}

const TradeTypeBanner = (data: BannerType) => {
    const { is_mobile } = useBreakpoints()
    return (
        <Container.Fixed
            as="section"
            className={dclsx(trade_type_hero, 'flex', 'align-items-center', 'justify-center')}
        >
            <div className={trade_type_hero_img}>
                {is_mobile ? banner_images['banner_mobile'] : banner_images['banner']}
            </div>
            <Typography.Heading textcolor="brand" size={is_mobile ? 'large' : 'xlarge'}>
                <Localize translate_text={data.title} />
            </Typography.Heading>
        </Container.Fixed>
    )
}

export default TradeTypeBanner
