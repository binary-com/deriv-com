import React, { HTMLAttributes } from 'react'
import { TSmartNavItemsContent } from '../../types'
import * as styles from './mobile-menu.module.scss'
import MobileNavItem from './mobile.items'
import Accordion from 'features/components/atoms/accordion'
import dclsx from 'features/utils/dclsx'

interface INavMenuProps<T extends string> extends HTMLAttributes<HTMLDivElement> {
    is_open: boolean
    items: TSmartNavItemsContent<T>[]
}

const MobileMenu = <T extends string>({ is_open, className, items }: INavMenuProps<T>) => {
    return (
        <div
            className={dclsx(className, styles.mobile_menu, {
                [styles.visible_nav_menu]: is_open,
            })}
        >
            <Accordion.Root type="single" collapsible>
                {items.map((contentItem) => (
                    <MobileNavItem key={contentItem.id} item={contentItem} />
                ))}
            </Accordion.Root>
        </div>
    )
}

export default MobileMenu
