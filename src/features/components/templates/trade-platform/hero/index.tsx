import React from 'react'
import { TradingPlatformPHeroProps } from '../types'
import { hero_image, hero_wrapper } from './hero.module.scss'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import TradeHeroContainer from 'features/components/templates/hero-banners/trade'
import { Localize } from 'components/localization'

const TradingPlatformHero = ({
    trading_platform_hero,
}: {
    trading_platform_hero: TradingPlatformPHeroProps
}) => {
    return (
        <TradeHeroContainer
            container={'fixed'}
            direction={'col-reverse'}
            justify={'center'}
            align={'center'}
            md={{ direction: 'row' }}
        >
            <FlexBox.Box
                className={hero_wrapper}
                direction={'col'}
                justify={'center'}
                ml={'8x'}
                margin_block={'15x'}
                md={{ ml: '0x' }}
            >
                <FlexBox.Item className={hero_image} align_self="start">
                    <div className="visible-phone-and-tablet">
                        {trading_platform_hero['logo_mobile']}
                    </div>
                    <div className="visible-larger-than-tablet">
                        {trading_platform_hero['logo']}
                    </div>
                </FlexBox.Item>
                {trading_platform_hero['hero_title'].map((title) => (
                    <Typography.Heading
                        key={title}
                        size={'xlarge'}
                        color={'secondary'}
                        weight={'bold'}
                        align={'left'}
                        pt={'4x'}
                        md={{ pt: '8x' }}
                    >
                        <Localize translate_text={title} />
                        <br />
                    </Typography.Heading>
                ))}
            </FlexBox.Box>
            <FlexBox.Item align_self={'center'} md={{ ml: '17x' }}>
                <div className="visible-phone-and-tablet">
                    {trading_platform_hero['hero_mobile']}
                </div>
                <div className="visible-larger-than-tablet">{trading_platform_hero['hero']}</div>
            </FlexBox.Item>
        </TradeHeroContainer>
    )
}
export default TradingPlatformHero
