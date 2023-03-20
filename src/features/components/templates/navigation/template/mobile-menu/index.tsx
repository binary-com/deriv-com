import React, { HTMLAttributes } from 'react'
import { TSmartNavItemsContent, TSmartNavContent, TSmartNavSectionColumns } from '../../types'
import * as styles from './mobile-menu.module.scss'
import NavSectionContainer from 'features/components/organisms/navigation/nav-sections-container'
import NavCardItems from 'features/components/organisms/navigation/nav-card-items'
import Accordion from 'features/components/atoms/accordion'
import dclsx from 'features/utils/dclsx'

interface INavMenuProps<T extends string> extends HTMLAttributes<HTMLDivElement> {
    is_open: boolean
    items: TSmartNavItemsContent<T>[]
}

const renderNavItems = (nav_items: TSmartNavContent[] | TSmartNavSectionColumns[]) => {
    if ('section' in nav_items[0].data) {
        return <NavSectionContainer items={nav_items as TSmartNavSectionColumns[]} />
    }
    return <NavCardItems items={nav_items as TSmartNavContent[]} />
}

const MobileMenu = <T extends string>({ is_open, className, items }: INavMenuProps<T>) => {
    return (
        <div
            className={dclsx(className, styles.mobile_menu, {
                [styles.visible_nav_menu]: is_open,
            })}
        >
            <Accordion.Root type="single" collapsible>
                {items.map((contentItem) => {
                    return (
                        <Accordion.Item
                            key={contentItem.id}
                            value={contentItem.data.active}
                            item_title={contentItem.data.title}
                        >
                            {renderNavItems(contentItem.data.content)}
                        </Accordion.Item>
                    )
                })}
            </Accordion.Root>
        </div>
    )
}

export default MobileMenu
