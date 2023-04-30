import React, { HTMLAttributes, useMemo, useRef, useState } from 'react'
import { TSmartNavItemsContent } from '../../types'
import { useNavContext } from '../nav-context'
import * as styles from './mobile-menu.module.scss'
import MobileNavItem from './mobile.items'
import Accordion from 'features/components/atoms/accordion'
import dclsx from 'features/utils/dclsx'
import Flex from 'features/components/atoms/flex-box'

interface INavMenuProps extends HTMLAttributes<HTMLDivElement> {
    items: TSmartNavItemsContent[]
    has_top_nav?: boolean
}

const MobileMenu = ({ className, items, has_top_nav }: INavMenuProps) => {
    const accordion_ref = useRef<HTMLDivElement>()
    const [current_tab, setCurrentTab] = useState('')
    const { is_menu_open } = useNavContext()

    const { other_items, single_items } = useMemo(() => {
        const single_items: TSmartNavItemsContent[] = []
        const other_items: TSmartNavItemsContent[] = []

        items.forEach((item) => {
            if (item.data.type === 'single-item') {
                single_items.push(item)
            } else {
                other_items.push(item)
            }
        })
        return { single_items, other_items }
    }, [items])

    const onTabChange = (tab: string) => {
        setCurrentTab(tab)
        if (accordion_ref.current) {
            accordion_ref.current.scroll({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    return (
        <Flex.Box
            visible="phone-and-tablet"
            className={dclsx(className, styles.mobile_menu, {
                [styles.visible_nav_menu]: is_menu_open,
                [styles.mobile_menu_top_nav]: has_top_nav,
            })}
            direction="col"
            gap={'8x'}
            innerRef={accordion_ref}
        >
            {other_items.length ? (
                <Accordion.Root
                    type="single"
                    value={current_tab}
                    onValueChange={onTabChange}
                    collapsible
                >
                    {other_items.map((contentItem) => (
                        <MobileNavItem item={contentItem} key={contentItem.id} />
                    ))}
                </Accordion.Root>
            ) : null}
            {single_items.map((single_item) => {
                return <MobileNavItem key={single_item.id} item={single_item} />
            })}
        </Flex.Box>
    )
}

export default MobileMenu
