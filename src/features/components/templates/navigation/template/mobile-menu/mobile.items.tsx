import React from 'react'
import { TSmartNavItemsContent } from '../../types'
import NavSingleItem from '../nav-single-item'
import NavDropItems from '../nav-drop-items'
import Accordion from 'features/components/atoms/accordion'

interface MobileNavItemProps<T extends string> {
    item: TSmartNavItemsContent<T>
}

const MobileNavItem = <T extends string>({ item }: MobileNavItemProps<T>) => {
    return item.data.type === 'single-item' ? (
        <NavSingleItem key={item.id} item={item.data} is_mobile />
    ) : (
        <Accordion.Item key={item.id} value={item.data.active} item_title={item.data.title}>
            <NavDropItems items={item.data} />
        </Accordion.Item>
    )
}

export default MobileNavItem
