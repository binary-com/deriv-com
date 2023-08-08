import React, { ReactNode } from 'react'
import TabMenuItem from './tab-menu-item'
import TabBase from './base'
import TabSwitcher from './tab-switcher'
import TabContent from './tab-content'

type TabTypes = {
    Base: typeof TabBase
    MenuItem: typeof TabMenuItem
    Switcher: typeof TabSwitcher
    Content: typeof TabContent
}

const Tab: TabTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Tab.Base = TabBase
Tab.MenuItem = TabMenuItem
Tab.Switcher = TabSwitcher
Tab.Content = TabContent

export default Tab
