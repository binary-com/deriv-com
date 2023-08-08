import React from 'react'
import { hero_image, hero_wrapper } from '../deriv-ez.module.scss'
import { hero_images } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import TradeHeroContainer from 'features/components/templates/hero-banners/trade'
import { Localize } from 'components/localization'

const DerivEZHero = () => {
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
                    <div className="visible-phone-and-tablet">{hero_images['mobile_logo']}</div>
                    <div className="visible-larger-than-tablet">{hero_images['logo']}</div>
                </FlexBox.Item>
                <Typography.Heading
                    size={'xlarge'}
                    color={'secondary'}
                    weight={'bold'}
                    align={'left'}
                    pt={'4x'}
                    md={{ pt: '8x' }}
                >
                    <Localize translate_text="_t_An intuitive,_t_" />
                    <br />
                    <Localize translate_text="_t_easy-to-get-started_t_" />
                    <br />
                    <Localize translate_text="_t_CFDs trading platform_t_" />
                </Typography.Heading>
            </FlexBox.Box>
            <FlexBox.Item align_self={'center'} md={{ ml: '17x' }}>
                <div className="visible-phone-and-tablet">{hero_images['hero_mobile']}</div>
                <div className="visible-larger-than-tablet">{hero_images['hero']}</div>
            </FlexBox.Item>
        </TradeHeroContainer>
    )
}

export default DerivEZHero
