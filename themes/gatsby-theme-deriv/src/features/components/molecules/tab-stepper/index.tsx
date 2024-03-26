import React from 'react'
import Tab from '../../atoms/tab'
import { StepperTabTypes } from 'features/components/atoms/tab/types'

const TabStepper = ({ items, onTabClick, tab }: StepperTabTypes) => {
    return (
        <>
            <Tab.Switcher tab={tab} onTabClick={onTabClick} />
            <Tab.Content items={items} tab={tab} onTabClick={onTabClick} />
        </>
    )
}

export default TabStepper
