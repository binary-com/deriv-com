import React from 'react'
import { TSmartNavItemsContent } from '../../types'
import * as styles from './nav-items.module.scss'
import NavDesktopItem from './desktop.items'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'

interface IDesktopNavbarProps<T extends string> {
    onItemClick: (item: T) => void
    activeTab: T
    items: TSmartNavItemsContent<T>[]
    has_centered_items?: boolean
}

const DesktopMenu = <T extends string>({
    onItemClick,
    activeTab,
    items,
    has_centered_items,
}: IDesktopNavbarProps<T>) => {
    return (
        <Flex.Box
            as="ul"
            justify="end"
            align="center"
            visible="larger-than-tablet"
            gap="12x"
            className={styles.nav_items}
            grow={has_centered_items ? '0' : '1'}
        >
            {items.map((contentItem) => {
                return (
                    <Flex.Box
                        key={contentItem.data.active}
                        className={dclsx({
                            [styles.active_item]: contentItem.data.active === activeTab,
                        })}
                        align="center"
                        as="li"
                        onClick={() => onItemClick(contentItem.data.active)}
                    >
                        <NavDesktopItem item={contentItem} activeTab={activeTab} />
                    </Flex.Box>
                )
            })}
        </Flex.Box>
    )
}

export default DesktopMenu
