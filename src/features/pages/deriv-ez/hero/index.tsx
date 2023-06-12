import React from 'react'
import { hero_image, hero_wrapper } from '../deriv-ez.module.scss'
import { hero_images } from './data'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import TradeHeroContainer from 'features/components/templates/hero-banners/trade'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { Localize } from 'components/localization'

const DerivEZHero = () => {
    const { is_mobile, is_mobile_or_tablet } = useBreakpoints()

    return (
        <TradeHeroContainer
            container={'fixed'}
            justify={'center'}
            align={'center'}
            direction={'col-reverse'}
            mt={'20x'}
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
                <FlexBox.Item
                    className={hero_image}
                    align_self={is_mobile_or_tablet ? 'start' : 'center'}
                    md={{ align_self: 'start' }}
                >
                    {is_mobile ? hero_images['mobile_logo'] : hero_images['logo']}
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
            <FlexBox.Item
                align_self={'center'}
                pt={'40x'}
                md={{ pt: '0x', ml: '17x' }}
                style={{ zIndex: '1' }}
            >
                {is_mobile_or_tablet ? hero_images['hero_mobile'] : hero_images['hero']}
            </FlexBox.Item>
        </TradeHeroContainer>
    )
}
export default DerivEZHero
