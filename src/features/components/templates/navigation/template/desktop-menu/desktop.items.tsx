import React from 'react'
import { TSmartNavItemsContent } from '../../types'
import NavSingleItem from '../nav-single-item'
import NavDropItems from '../nav-drop-items'
import * as styles from './nav-items.module.scss'
import { Localize } from 'components/localization'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import dclsx from 'features/utils/dclsx'

interface DesktopItemsProps<T extends string> {
    activeTab: T
    item: TSmartNavItemsContent<T>
}

const NavDesktopItem = <T extends string>({ item, activeTab }: DesktopItemsProps<T>) => {
    return (
        <>
            {item.data.type === 'single-item' ? (
                <NavSingleItem item={item.data} />
            ) : (
                <>
                    <Typography.Paragraph size="medium" className={styles.item_title}>
                        <Localize translate_text={item.data.title} />
                    </Typography.Paragraph>
                    {item.data.active === activeTab && (
                        <Container.Fixed
                            bgcolor="primary"
                            padding_block="10x"
                            padding_inline="10x"
                            className={dclsx(styles.active_section, {
                                [styles.active_trade_section]: activeTab === 'trade',
                            })}
                        >
                            <NavDropItems items={item.data} />
                        </Container.Fixed>
                    )}
                </>
            )}
        </>
    )
}

export default NavDesktopItem
