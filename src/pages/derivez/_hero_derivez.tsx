import React from 'react'
import * as style from './deriv-ez.module.scss'
import HeroPhone from 'images/common/deriv-ez/hero-phone.png'
import HeroPhoneMobile from 'images/common/deriv-ez/hero-phone-mobile.png'
import DerivEZLogo from 'images/svg/deriv-ez/derivez-logo.svg'
import FlexBox from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import TradeHeroContainer from 'features/components/templates/hero-banners/trade'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { Localize } from 'components/localization'

const DerivEZHero = () => {
    const { is_mobile } = useBreakpoints()

    return (
        <TradeHeroContainer
            container={'fixed'}
            justify={'center'}
            direction={'col-reverse'}
            md={{ direction: 'row' }}
        >
            <FlexBox.Box
                className={style.hero_spacing}
                direction={'col'}
                justify={'center'}
                gap={'8x'}
                ml={'8x'}
            >
                <FlexBox.Box direction={'row'} justify={'start'} align={'center'}>
                    <Image src={DerivEZLogo} alt="logo" width="32" height="32" />
                    <Typography.Paragraph
                        size={'xlarge'}
                        color={'secondary'}
                        ml={'8x'}
                        md={{ weight: 'normal' }}
                        lg={{ weight: 'bold' }}
                    >
                        <Localize translate_text="_t_Deriv EZ_t_" />
                    </Typography.Paragraph>
                </FlexBox.Box>
                <Typography.Heading size={'xlarge'} color={'secondary'} weight={'bold'}>
                    <Localize translate_text="_t_An intuitive, easy-to-get-started CFDs trading platform_t_" />
                </Typography.Heading>
            </FlexBox.Box>
            <FlexBox.Item align_self={'center'} pt={'40x'} style={{ zIndex: '1' }}>
                <Image
                    src={is_mobile ? HeroPhoneMobile : HeroPhone}
                    alt="Deriv EZ online trading platform"
                />
            </FlexBox.Item>
        </TradeHeroContainer>
    )
}
export default DerivEZHero
