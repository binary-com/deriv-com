import React, { useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useNavContext } from '../nav-context'
import NavSingleItem from '../nav-single-item'
import NavDesktopItem from './desktop.items'
import useRegion from 'components/hooks/use-region'
import { get_lang_direction } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import './styles.scss'

interface IDesktopNavbarProps {
    has_centered_items?: boolean
    has_start_aligned_items?: boolean
}

const DesktopMenu = ({ has_centered_items, has_start_aligned_items }: IDesktopNavbarProps) => {
    const [active, setActive] = useState('')
    const { link_items, drop_items } = useNavContext()
    const { is_eu } = useRegion()
    let additionalClasses = []

    if (has_start_aligned_items) {
        if (is_eu) {
            additionalClasses = ['justify-center', 'margin-right-40x', 'padding-right-40x']
        } else {
            additionalClasses = ['justify-start', 'margin-left-36x']
        }
    } else if (has_centered_items) {
        additionalClasses = ['justify-center']
    } else {
        additionalClasses = ['justify-end', 'margin-right-40x']
    }

    const classNames = ['navigation_root', ...additionalClasses]

    return (
        <NavigationMenu.Root
            dir={get_lang_direction()}
            value={active}
            onValueChange={setActive}
            className={dclsx(...classNames)}
        >
            <NavigationMenu.List className="navigation_list">
                {drop_items.map((item) => (
                    <NavDesktopItem key={item.id} item={item} active={active} />
                ))}
                {link_items.map((item) => (
                    <NavigationMenu.Item key={item.id} value={item.data.title} asChild>
                        <li>
                            <NavigationMenu.Link asChild>
                                <NavSingleItem item={item.data} />
                            </NavigationMenu.Link>
                        </li>
                    </NavigationMenu.Item>
                ))}
            </NavigationMenu.List>
            <div
                className={dclsx('navigation_position', {
                    trade_active: active === '_t_Trade_t_',
                    trade_landing_active:
                        typeof window !== 'undefined' &&
                        window.location.pathname.includes('landing') &&
                        active === '_t_Trade_t_',
                })}
            >
                <NavigationMenu.Viewport className="navigation_viewport" />
            </div>
        </NavigationMenu.Root>
    )
}

export default DesktopMenu
