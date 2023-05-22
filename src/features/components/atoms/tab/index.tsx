import React, { ReactNode } from 'react'
import TabMenuItem from './tab-menu-item'
import TabBase from './base'

type TabTypes = {
    Base: typeof TabBase
    MenuItem: typeof TabMenuItem
}

const Tab: TabTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Tab.Base = TabBase
Tab.MenuItem = TabMenuItem

export default Tab
