import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { SmartNavDropItems } from '../../types'
import NavDropItems from '../nav-drop-items'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'

interface DesktopItemsProps {
    item: SmartNavDropItems
}

const NavDesktopItem = ({ item }: DesktopItemsProps) => {
    return (
        <NavigationMenu.Item value={item.data.title}>
            <NavigationMenu.Trigger
                className="navigation_trigger"
                onClick={(event) => event.preventDefault()}
            >
                <Typography.Paragraph size="medium" font_family="UBUNTU">
                    <Localize translate_text={item.data.title} />
                </Typography.Paragraph>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="navigation_content">
                <NavDropItems items={item.data} />
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    )
}

export default NavDesktopItem
