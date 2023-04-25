import React, { HTMLAttributes } from 'react'
import { TSmartNavItemsContent } from '../../types'
import * as styles from './mobile-menu.module.scss'
import MobileNavItem from './mobile.items'
import Accordion from 'features/components/atoms/accordion'
import dclsx from 'features/utils/dclsx'
import Flex from 'features/components/atoms/flex-box'

interface INavMenuProps extends HTMLAttributes<HTMLDivElement> {
    is_open: boolean
    items: TSmartNavItemsContent[]
}

const MobileMenu = ({ is_open, className, items }: INavMenuProps) => {
    return (
        <Flex.Item
            visible="phone-and-tablet"
            className={dclsx(className, styles.mobile_menu, {
                [styles.visible_nav_menu]: is_open,
            })}
        >
            <Accordion.Root type="single" collapsible>
                {items.map((contentItem) => (
                    <MobileNavItem key={contentItem.id} item={contentItem} />
                ))}
            </Accordion.Root>
        </Flex.Item>
    )
}

export default MobileMenu
