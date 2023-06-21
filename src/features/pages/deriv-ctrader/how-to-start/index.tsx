import React from 'react'
import { demo, demo_mobile, real, real_mobile } from './data'
import TradingPlatformHowToStart from 'features/components/templates/trade-platform/how-to-start'
import FlexBoxContainer from 'features/components/atoms/flex-box/box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const HowToStartCTrader = () => {
    return (
        <FlexBoxContainer direction={'col'} align={'center'} justify={'center'}>
            <Typography.Heading align={'center'} mb={'20x'}>
                <Localize
                    translate_text={'_t_How to get started with a Deriv cTrader account_t_'}
                />
            </Typography.Heading>
            <TradingPlatformHowToStart
                demo={demo}
                real={real}
                demo_mobile={demo_mobile}
                real_mobile={real_mobile}
            />
        </FlexBoxContainer>
    )
}

export default HowToStartCTrader
