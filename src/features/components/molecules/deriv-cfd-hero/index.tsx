import React from 'react'
import { hero_image, hero_wrapper } from './deriv-cfd-hero.module.scss'
import { DerivCfdContentType } from './types'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import TradeHeroContainer from 'features/components/templates/hero-banners/trade'
import { Localize } from 'components/localization'

interface DerivCfdHeroType {
    contentData: DerivCfdContentType
}

const DerivCfdHero = ({ contentData }: DerivCfdHeroType) => {
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
                    <div className="visible-phone-and-tablet">{contentData.mobile_logo}</div>
                    <div className="visible-larger-than-tablet">{contentData.logo}</div>
                </FlexBox.Item>
                <Typography.Heading
                    size={'xlarge'}
                    color={'secondary'}
                    weight={'bold'}
                    align={'left'}
                    pt={'4x'}
                    md={{ pt: '8x' }}
                >
                    <Localize translate_text={contentData.main_title} />
                    <br />
                    <Localize translate_text={contentData.secondary_title} />
                    <br />
                    <Localize translate_text={contentData.sub_title} />
                </Typography.Heading>
            </FlexBox.Box>
            <FlexBox.Item align_self={'center'} md={{ ml: '17x' }}>
                <div className="visible-phone-and-tablet">{contentData.hero_mobile}</div>
                <div className="visible-larger-than-tablet">{contentData.hero}</div>
            </FlexBox.Item>
        </TradeHeroContainer>
    )
}
export default DerivCfdHero
