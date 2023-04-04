import React from 'react'
import { TSmartNavItemsContent, TSmartNavContent, TSmartNavSectionColumns } from '../../types'
import * as styles from './nav-items.module.scss'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'
import NavSectionContainer from 'features/components/organisms/navigation/nav-sections-container'
import NavCardItems from 'features/components/organisms/navigation/nav-card-items'
import Container from 'features/components/atoms/container'
import Flex from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'

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
        <Flex.Box
            as="ul"
            justify="end"
            align="center"
            gap="2x"
            className={styles.nav_items}
            mr={'10x'}
        >
            {items.map((contentItem) => {
                return (
                    <li
                        key={contentItem.data.active}
                        className={dclsx({
                            [styles.active_item]: contentItem.data.active === activeTab,
                        })}
                        onClick={() => onItemClick(contentItem.data.active)}
                    >
                        <Typography.Paragraph size="medium" className={styles.item_title}>
                            <Localize translate_text={contentItem.data.title} />
                        </Typography.Paragraph>
                        {contentItem.data.active === activeTab && (
                            <Container.Fixed
                                bgcolor="primary"
                                className={dclsx(styles.active_section, {
                                    [styles.active_trade_section]: activeTab === 'trade',
                                })}
                            >
                                {renderNavItems(contentItem.data.content)}
                            </Container.Fixed>
                        )}
                    </li>
                )
            })}
        </Flex.Box>
    )
}

export default DesktopMenu
