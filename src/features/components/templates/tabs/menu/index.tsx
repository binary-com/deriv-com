import React from 'react'
import { Localize } from 'components/localization'
import Tab from 'features/components/atoms/tab'
import { TString } from 'types/generics'

export type TabMenuProps = {
    tab_names: TString[] | string[]
    current_tab: TString
    setCurrentTab: (name: TString) => void
}
const TabMenu = ({ tab_names, current_tab, setCurrentTab }: TabMenuProps) => {
    return (
        <>
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
        </>
    )
}

export default TabMenu
