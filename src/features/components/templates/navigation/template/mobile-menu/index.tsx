import React, { HTMLAttributes, useRef, useState } from 'react'
import { useNavContext } from '../nav-context'
import * as styles from './mobile-menu.module.scss'
import MobileNavItem from './mobile.items'
import Accordion from 'features/components/atoms/accordion'
import dclsx from 'features/utils/dclsx'
import Flex from 'features/components/atoms/flex-box'

interface INavMenuProps extends HTMLAttributes<HTMLDivElement> {
    has_top_nav?: boolean
}

const MobileMenu = ({ className, has_top_nav }: INavMenuProps) => {
    const accordion_ref = useRef<HTMLDivElement>()
    const [current_tab, setCurrentTab] = useState('')
    const { is_menu_open, link_items, drop_items } = useNavContext()

    const onTabChange = (tab: string) => {
        setCurrentTab(tab)
        if (accordion_ref.current) {
            accordion_ref.current.scroll({
                top: 0,
                behavior: 'auto', // please don't use `smooth` here, it causes issue on safari, check this out: https://github.com/reactjs/react.dev/issues/4846#issuecomment-1216827589
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
            {drop_items.length ? (
                <Accordion.Root
                    type="single"
                    value={current_tab}
                    onValueChange={onTabChange}
                    collapsible
                >
                    {drop_items.map((contentItem) => (
                        <MobileNavItem item={contentItem} key={contentItem.id} />
                    ))}
                </Accordion.Root>
            ) : null}
            {link_items.map((single_item) => {
                return <MobileNavItem key={single_item.id} item={single_item} />
            })}
        </Flex.Box>
    )
}

export default MobileMenu
