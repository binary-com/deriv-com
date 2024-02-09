import React, { useState } from 'react'
import { trading_platform_start } from './data'
import FlexBoxContainer from 'features/components/atoms/flex-box/box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import TabStepper from 'features/components/templates/tabs/stepper'

const HowToStartCTrader = () => {
    const [tab, setTab] = useState('demo')

    const onTabClick = (chosenTab: 'demo' | 'real') => {
        setTab(chosenTab)
    }
    return (
        <FlexBoxContainer direction={'col'} align={'center'} justify={'center'}>
            <Typography.Heading align={'center'} mb={'20x'}>
                <Localize
                    translate_text={'_t_How to get started with a Deriv cTrader account_t_'}
                />
            </Typography.Heading>

            <div className="at-visible-phone-and-tablet">
                <TabStepper
                    is_ctrader
                    tab={tab}
                    onTabClick={onTabClick}
                    items={trading_platform_start[`${tab}_mobile`]}
                />
            </div>
            <div className="at-visible-larger-than-tablet">
                <TabStepper
                    is_ctrader
                    tab={tab}
                    onTabClick={onTabClick}
                    items={trading_platform_start[tab]}
                />
            </div>
        </FlexBoxContainer>
    )
}

export default HowToStartCTrader
