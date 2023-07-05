import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { SmartNavDropItems } from '../../types'
import NavDropItems from '../nav-drop-items'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import useRegion from 'components/hooks/use-region'
import dclsx from 'features/utils/dclsx'

interface DesktopItemsProps {
    item: SmartNavDropItems
    active: string
}

const NavDesktopItem = ({ item, active }: DesktopItemsProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!window.matchMedia('(hover: none)').matches) {
            e.preventDefault()
        }
    }
    const { is_row } = useRegion()
    const has_scroll_menu = active === '_t_Trade_t_' && is_row

    return (
        <NavigationMenu.Item value={item.data.title}>
            <NavigationMenu.Trigger className="navigation_trigger" onClick={handleClick}>
                <Typography.Paragraph size="medium" font_family="UBUNTU">
                    <Localize translate_text={item.data.title} />
                </Typography.Paragraph>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
                className={dclsx('navigation_content', {
                    navigation_scrollable_menu: has_scroll_menu,
                })}
            >
                <NavDropItems items={item.data} />
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    )
}

export default NavDesktopItem
