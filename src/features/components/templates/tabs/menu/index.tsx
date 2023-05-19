import React from 'react'
import { Localize } from 'components/localization'
import Tab from 'features/components/atoms/tab'
import FlexBox from 'features/components/atoms/flex-box'
import { TString } from 'types/generics'

export type TabMenuProps = {
    tab_names: TString[] | string[]
    current_tab: TString
    setCurrentTab: (name: TString) => void
}
const TabMenu = ({ tab_names, current_tab, setCurrentTab }: TabMenuProps) => {
    return (
        <FlexBox.Box>
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
