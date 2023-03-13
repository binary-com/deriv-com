import React from 'react'
import clsx from 'clsx'
import { TSmartNavItemsContent, TSmartNavContent, TSmartNavSectionColumns } from '../../types'
import * as styles from './nav-items.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import NavSectionContainer from 'features/components/organisms/navigation/nav-sections-container'
import NavCardItems from 'features/components/organisms/navigation/nav-card-items'

const renderNavItems = (nav_items: TSmartNavContent[] | TSmartNavSectionColumns[]) => {
    if ('section' in nav_items[0].data) {
        return <NavSectionContainer items={nav_items as TSmartNavSectionColumns[]} />
    }
    return <NavCardItems items={nav_items as TSmartNavContent[]} />
}

interface IDesktopNavbarProps<T extends string> {
    onItemClick: (item: T) => void
    activeTab: T
    items: TSmartNavItemsContent<T>[]
}

const DesktopMenu = <T extends string>({
    onItemClick,
    activeTab,
    items,
}: IDesktopNavbarProps<T>) => {
    return (
        <ul className={styles.nav_items}>
            {items.map((contentItem) => {
                return (
                    <li
                        key={contentItem.data.active}
                        className={clsx({
                            [styles.active_item]: contentItem.data.active === activeTab,
                        })}
                        onClick={() => onItemClick(contentItem.data.active)}
                    >
                        <Typography.Heading as={'h6'} size={6} className={styles.item_title}>
                            <Localize translate_text={contentItem.data.title} />
                        </Typography.Heading>
                        {contentItem.data.active === activeTab && (
                            <div
                                className={clsx(styles.active_section, {
                                    [styles.active_trade_section]: activeTab === 'trade',
                                })}
                            >
                                {renderNavItems(contentItem.data.content)}
                            </div>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export default DesktopMenu
