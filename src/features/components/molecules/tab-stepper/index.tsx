import React from 'react'
import Tab from '../../atoms/tab'
import { TStepperTab } from '../../atoms/tab/types'

const TabStepper = ({ items, onTabClick, tab }: TStepperTab) => {
    return (
        <>
            <Tab.Switcher tab={tab} onTabClick={onTabClick} />
            <Tab.Content items={items} tab={tab} onTabClick={onTabClick} />
        </>
    )
}

export default TabStepper
