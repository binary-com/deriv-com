import React, { useState } from 'react'
import { trading_platform_start } from './data'
import TabStepper from 'features/components/templates/tabs/stepper'

const StartDerivEZ = () => {
    const [tab, setTab] = useState('demo')

    const onTabClick = (chosenTab: 'demo' | 'real') => {
        setTab(chosenTab)
    }

    return (
        <>
            <div className="visible-phone-and-tablet">
                <TabStepper
                    tab={tab}
                    onTabClick={onTabClick}
                    items={trading_platform_start[`${tab}_mobile`]}
                />
            </div>
            <div className="visible-larger-than-tablet">
                <TabStepper tab={tab} onTabClick={onTabClick} items={trading_platform_start[tab]} />
            </div>
        </>
    )
}

export default StartDerivEZ
