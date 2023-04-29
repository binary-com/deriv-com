import React, { useState } from 'react'
import { demo, real } from './data'
import TabStepper from 'features/components/molecules/tab-stepper'

const StartDerivEZ = () => {
    const [tab, setTab] = useState('demo')

    const onTabClick = (chosenTab: 'demo' | 'real') => {
        setTab(chosenTab)
    }

    return <TabStepper tab={tab} onTabClick={onTabClick} items={tab == 'demo' ? demo : real} />
}

export default StartDerivEZ
