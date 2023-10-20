import React from 'react'
import Tab from '../../../atoms/tab'
import { StepperTabTypes } from 'features/components/atoms/tab/types'

const TabStepper = ({ items, onTabClick, tab, is_ctrader }: StepperTabTypes) => {
    return (
        <>
            <Tab.Switcher tab={tab} onTabClick={onTabClick} is_ctrader={is_ctrader || false} />
            <Tab.Content items={items} onTabClick={onTabClick} />
        </>
    )
}

export default TabStepper
