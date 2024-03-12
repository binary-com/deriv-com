import React from 'react'
import { tab_data } from './data'
import NavigationTabWithoutBorder from 'features/components/templates/navigation/tab-nav-without-border'

interface OptionsTopTabProps {
    is_breadcrumb?: boolean
}

const OptionsTopTab = ({ is_breadcrumb = false }: OptionsTopTabProps) => {
    return <NavigationTabWithoutBorder tab_data={tab_data} is_breadcrumb={is_breadcrumb} />
}

export default OptionsTopTab
