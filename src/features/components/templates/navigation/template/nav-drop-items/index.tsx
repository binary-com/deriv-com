import React from 'react'
import { TNavMultiColumnItems, TNavSingleColumnItems } from '../../types'
import NavCardItems from 'features/components/organisms/navigation/nav-card-items'
import NavSectionContainer from 'features/components/organisms/navigation/nav-sections-container'

const NavDropItems = ({ items }: { items: TNavSingleColumnItems | TNavMultiColumnItems }) => {
    if (items.type === 'single-column') {
        return <NavCardItems items={items.content} />
    }
    return <NavSectionContainer items={items.content} />
}

export default NavDropItems
