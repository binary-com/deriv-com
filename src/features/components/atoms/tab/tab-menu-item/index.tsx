import React from 'react'
import BaseTab, { TabBaseProps } from '../base'
import dclsx from 'features/utils/dclsx'

export interface TabMenuItemProps extends TabBaseProps {
    selected?: boolean
    is_no_border_bottom?: boolean
}
const TabMenuItem = ({
    className,
    selected,
    is_no_border_bottom = false,
    ...rest
}: TabMenuItemProps) => {
    return (
        <BaseTab
            className={dclsx(
                className,
                'at-menu-item',
                is_no_border_bottom && 'at-navigation-tabs',
                { 'at-selected': selected },
            )}
            {...rest}
        />
    )
}

export default TabMenuItem
