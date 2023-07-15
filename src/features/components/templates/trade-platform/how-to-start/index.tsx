import React, { useCallback, useState } from 'react'
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
    const [tab, setTab] = useState<TabType>('demo')
    const { is_mobile_or_tablet } = useBreakpoints()
    const [items, setItems] = useState<TabItemTypes[]>([])

    const onTabClick = useCallback(
        (chosen_tab: TabType) => {
            setTab(chosen_tab)
            if (chosen_tab === 'real') {
                if (is_mobile_or_tablet) {
                    setItems(real_mobile)
                } else {
                    setItems(real)
                }
            } else {
                if (is_mobile_or_tablet) {
                    setItems(demo_mobile)
                } else {
                    setItems(demo)
                }
            }
        },
        [demo, demo_mobile, is_mobile_or_tablet, real, real_mobile],
    )

    return <TabStepper tab={tab} onTabClick={onTabClick} items={items} />
}

export default TradingPlatformHowToStart
