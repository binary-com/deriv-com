import React from 'react'
import BaseTab, { TabBaseProps } from '../base'
import dclsx from 'features/utils/dclsx'

export interface TabMenuItemProps extends TabBaseProps {
    selected?: boolean
}
const TabMenuItem = ({ className, selected, ...rest }: TabMenuItemProps) => {
    return <BaseTab className={dclsx(className, 'menu-item', { selected })} {...rest} />
}

export default TabMenuItem
