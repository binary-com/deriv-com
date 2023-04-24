import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { TSmartNavItemsContent } from '../../types'
import NavSingleItem from '../nav-single-item'
import NavDropItems from '../nav-drop-items'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'

interface DesktopItemsProps {
    item: TSmartNavItemsContent
}

const NavDesktopItem = ({ item }: DesktopItemsProps) => {
    return (
        <NavigationMenu.Item value={item.data.title}>
            {item.data.type === 'single-item' ? (
                <NavigationMenu.Link asChild>
                    <NavSingleItem item={item.data} />
                </NavigationMenu.Link>
            ) : (
                <>
                    <NavigationMenu.Trigger className="navigation_trigger">
                        <Typography.Paragraph size="medium">
                            <Localize translate_text={item.data.title} />
                        </Typography.Paragraph>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="navigation_content">
                        <NavDropItems items={item.data} />
                    </NavigationMenu.Content>
                </>
            )}
        </NavigationMenu.Item>
    )
}

export default NavDesktopItem
