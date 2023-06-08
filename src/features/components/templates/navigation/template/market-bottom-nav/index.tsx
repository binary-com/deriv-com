import React from 'react'
import { marketItems } from './data'
import BottomNavItem from './bottom-nav.item'
import { container } from './styles.module.scss'
import useVisibleContent from 'components/hooks/use-visible-content'
import useRegion from 'components/hooks/use-region'

const MarketBottomNav = () => {
    const { is_eu } = useRegion()
    const visible_items = useVisibleContent({ content: marketItems, config: { is_eu } })
    return (
        <div className={container}>
            {visible_items.map((item) => (
                <BottomNavItem key={item.title} item={item} />
            ))}
        </div>
    )
}

export default MarketBottomNav
