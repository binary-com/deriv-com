import React, { ReactNode } from 'react'
import TabSwitcher from './tab-switcher'
import TabContent from './tab-content'

type TypographyTypes = {
    Switcher: typeof TabSwitcher
    Content: typeof TabContent
}

const Tab: TypographyTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Tab.Switcher = TabSwitcher
Tab.Content = TabContent

export default Tab
