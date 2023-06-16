import React from 'react'
import Tab from '../../../atoms/tab'
import FlexBox from 'features/components/atoms/flex-box'
import { StepperTabTypes } from 'features/components/atoms/tab/types'

const TabStepper = ({ items, onTabClick, tab, ...rest }: StepperTabTypes) => {
    return (
        <FlexBox.Box {...rest}>
            <Tab.Switcher tab={tab} onTabClick={onTabClick} />
            <Tab.Content items={items} onTabClick={onTabClick} />
        </FlexBox.Box>
    )
}

export default TabStepper
