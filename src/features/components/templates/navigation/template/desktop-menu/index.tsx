import React, { useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { TSmartNavItemsContent } from '../../types'
import NavDesktopItem from './desktop.items'
import { get_lang_direction } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import './styles.scss'

interface IDesktopNavbarProps {
    items: TSmartNavItemsContent[]
    has_centered_items?: boolean
}

const DesktopMenu = ({ items, has_centered_items }: IDesktopNavbarProps) => {
    const [active, setActive] = useState('')

    return (
        <NavigationMenu.Root
            dir={get_lang_direction()}
            value={active}
            onValueChange={setActive}
            className={dclsx(
                'navigation_root',
                has_centered_items ? 'justify-center' : 'justify-end',
                has_centered_items ? undefined : 'margin-right-40x',
            )}
        >
            <NavigationMenu.List className="navigation_list">
                {items.map((item) => (
                    <NavDesktopItem key={item.id} item={item} />
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
