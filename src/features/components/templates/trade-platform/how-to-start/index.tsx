import React, { useEffect, useMemo, useState } from 'react'
import { TradingPlatformStepperViewType } from '../types'
import TabStepper from 'features/components/templates/tabs/stepper'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { TabItemTypes } from 'features/components/atoms/tab/types'

export type TradingPlatformStartProps = {
    demo: TradingPlatformStepperViewType
    demo_mobile?: TradingPlatformStepperViewType
    real: TradingPlatformStepperViewType
    real_mobile?: TradingPlatformStepperViewType
}

type TabType = 'demo' | 'real'

const TradingPlatformHowToStart = ({
    demo,
    demo_mobile,
    real,
    real_mobile,
}: TradingPlatformStartProps) => {
    const [tab, setTab] = useState('demo')
    const { is_mobile_or_tablet, is_mobile, is_tablet } = useBreakpoints()
    const [items, setItems] = useState<TabItemTypes[]>(is_mobile_or_tablet ? demo_mobile : demo)

    const onTabClick = (chosen_tab: TabType) => {
        setTab(chosen_tab)
    }

    const new_items = useMemo(() => {
        switch (tab) {
            case 'real':
                return is_mobile_or_tablet ? real_mobile : real
            case 'demo':
                return is_mobile_or_tablet ? demo_mobile : demo
        }
    }, [is_mobile_or_tablet, tab])

    useEffect(() => {
        setItems(new_items)
    }, [new_items])

    return <TabStepper tab={tab} onTabClick={onTabClick} items={items} />
}

export default TradingPlatformHowToStart
