import React, { useState } from 'react'
import { TradingPlatformStartProps } from '../types'
import TabStepper from 'features/components/templates/tabs/stepper'
import useBreakpoints from 'components/hooks/use-breakpoints'

const TradingPlatformHowToStart = ({
    trading_platform_start,
}: {
    trading_platform_start: TradingPlatformStartProps
}) => {
    const [tab, setTab] = useState('demo')
    const { is_mobile_or_tablet } = useBreakpoints()

    const onTabClick = (chosen_tab: 'demo' | 'real') => {
        setTab(chosen_tab)
    }

    return (
        <TabStepper
            tab={tab}
            onTabClick={onTabClick}
            items={
                is_mobile_or_tablet
                    ? trading_platform_start[`${tab}_mobile`]
                    : trading_platform_start[tab]
            }
        />
    )
}

export default TradingPlatformHowToStart
