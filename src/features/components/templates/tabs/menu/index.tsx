import React from 'react'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Tab from 'features/components/atoms/tab'
import { TString } from 'types/generics'

export type TabMenuProps = {
    class_name?: string
    tab_names: TString[] | string[]
    current_tab: TString | string
    setCurrentTab: (name: TString) => void
}
const TabMenu = ({ class_name, tab_names, current_tab, setCurrentTab }: TabMenuProps) => {
    return (
        <FlexBox.Box
            className={class_name}
            direction={'row'}
            justify={'start'}
            md={{ justify: 'center' }}
        >
            {tab_names.map((tab_name) => {
                return (
                    <Tab.MenuItem
                        key={tab_name}
                        selected={tab_name == current_tab}
                        onClick={() => {
                            setCurrentTab(tab_name)
                        }}
                    >
                        <Localize translate_text={tab_name} />
                    </Tab.MenuItem>
                )
            })}
        </FlexBox.Box>
    )
}

export default TabMenu
