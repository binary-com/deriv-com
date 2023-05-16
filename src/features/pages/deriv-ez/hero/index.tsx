import React from 'react'
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
            direction={'col-reverse'}
            md={{ direction: 'row' }}
        >
            <FlexBox.Box
                direction={'col'}
                justify={'center'}
                align={'center'}
                gap={'8x'}
                ml={'8x'}
                mb={'40x'}
                pt={'20x'}
                md={{ align: 'start' }}
                style={{ maxInlineSize: !is_mobile_or_tablet && '58rem' }}
            >
                <FlexBox.Item align_self={'center'} md={{ align_self: 'start' }}>
                    {is_mobile ? hero_images['mobile_logo'] : hero_images['logo']}
                </FlexBox.Item>
                <Typography.Heading
                    size={'xlarge'}
                    color={'secondary'}
                    weight={'bold'}
                    pt={'4x'}
                    align={is_mobile_or_tablet ? 'center' : 'left'}
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
                {is_mobile ? hero_images['hero_mobile'] : hero_images['hero']}
            </FlexBox.Item>
        </TradeHeroContainer>
    )
}
export default DerivEZHero
