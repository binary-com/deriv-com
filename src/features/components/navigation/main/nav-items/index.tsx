import clsx from 'clsx'
import React, { forwardRef, HTMLAttributes } from 'react'
import PlatformSection from '../nav-sections/platform'
import NavMarketSection from '../nav-sections/market'
import AboutUsNavSection from '../nav-sections/about-us'
import ResourcesNavSection from '../nav-sections/resources'
import { TActiveNav, TNavLink } from '../types'
import * as styles from './nav-items.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/typography'

interface IDesktopNavbarProps extends HTMLAttributes<HTMLUListElement> {
    onItemClick: (item: TActiveNav) => void
    activeTab: TActiveNav
}

const links: TNavLink[] = [
    { active: 'trade', title: '_t_Trade_t_' },
    { active: 'markets', title: '_t_Markets_t_' },
    { active: 'about', title: '_t_About us_t_' },
    { active: 'resources', title: '_t_Resources_t_' },
]

const getNavigationContents = (parent: TActiveNav) => {
    if (parent === 'trade') return <PlatformSection />
    if (parent === 'markets') return <NavMarketSection />
    if (parent === 'about') return <AboutUsNavSection />
    if (parent === 'resources') return <ResourcesNavSection />
}

const DesktopNavbar = forwardRef<HTMLUListElement, IDesktopNavbarProps>(
    ({ activeTab, onItemClick }, ref) => {
        return (
            <ul ref={ref} className={styles.nav_items}>
                {links.map((item) => (
                    <li
                        key={item.active}
                        className={clsx({
                            [styles.active_item]: item.active === activeTab,
                        })}
                        onClick={() => onItemClick(item.active)}
                    >
                        <Typography as={'h6'} className={styles.item_title}>
                            <Localize translate_text={item.title} />
                        </Typography>
                        {item.active === activeTab && (
                            <div
                                className={clsx(styles.active_section, {
                                    [styles.active_trade_section]: activeTab === 'trade',
                                })}
                            >
                                {getNavigationContents(activeTab)}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        )
    },
)

DesktopNavbar.displayName = 'DesktopNavbar'

export default DesktopNavbar
