import React from 'react'
import { marketItems } from './data'
import BottomNavItem from './bottom-nav.item'
import { container } from './styles.module.scss'
import useRegion from 'components/hooks/use-region'

const MarketBottomNav = () => {
    const { is_eu } = useRegion()

    return (
        <div className={container}>
            {marketItems
                .filter((item) => !(is_eu && item.title === '_t_ETFs_t_'))
                .map((item) => (
                    <BottomNavItem key={item.title} item={item} />
                ))}
        </div>
    )
}

export default MarketBottomNav
