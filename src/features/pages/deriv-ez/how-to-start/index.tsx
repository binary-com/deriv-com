import React, { useState } from 'react'
import { trading_platform_start } from './data'
import TabStepper from 'features/components/templates/tabs/stepper'
import useBreakpoints from 'components/hooks/use-breakpoints'

const StartDerivEZ = () => {
    const [tab, setTab] = useState('demo')
    const { is_mobile_or_tablet } = useBreakpoints()

    const onTabClick = (chosenTab: 'demo' | 'real') => {
        setTab(chosenTab)
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

export default StartDerivEZ
