import React, { HTMLAttributes, ReactNode, useCallback, useRef, useState } from 'react'
import { TNavItems } from '../types'
import DesktopMenu from './desktop-menu'
import * as styles from './nav.template.module.scss'
import MobileMenu from './mobile-menu'
import Container from 'features/components/atoms/container'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import useVisibleContent from 'components/hooks/use-visible-content'
import MobileMenuToggle from 'features/components/molecules/mobile-menu-toggle'
import FlexBox from 'features/components/atoms/flex-box'
import dclsx from 'features/utils/dclsx'

interface NavTemplateProps<T extends string> extends HTMLAttributes<HTMLDivElement> {
    renderTopNav?: () => ReactNode
    renderLogo: () => ReactNode
    items: TNavItems<T>
}

const NavTemplate = <T extends string>({
    renderLogo,
    renderTopNav,
    items,
    children,
    className,
}: NavTemplateProps<T>) => {
    const nav_wrapper_ref = useRef()

    const [activeTab, setActiveTab] = useState<T>(null)

    const [is_menu_open, setIsMenuOpen] = useState(false)

    const { is_mobile_or_tablet } = useBreakpoints()

    const onMenuToggleClick = () => {
        setIsMenuOpen((prevState) => !prevState)
    }

    const onOutsideClick = useCallback(() => {
        setActiveTab(null)
        if (is_menu_open) {
            setIsMenuOpen(false)
        }
    }, [is_menu_open])

    useOutsideClick(nav_wrapper_ref, onOutsideClick)

    const onItemClick = (item: T) => {
        if (item === activeTab) {
            setActiveTab(null)
        } else {
            setActiveTab(item)
        }
    }

    const visible_items = useVisibleContent({
        content: items,
        config: { is_mobile: is_mobile_or_tablet },
    })

    return (
        <Container.Fixed
            innerRef={nav_wrapper_ref}
            as="header"
            bgcolor="white"
            className={dclsx(styles.header_wrapper, className)}
        >
            {renderTopNav?.()}
            <FlexBox
                as="nav"
                container="fluid"
                justify="between"
                align="center"
                gap="5x"
                className={styles.nav_container}
            >
                <FlexBox justify="center" align="center">
                    {is_mobile_or_tablet && (
                        <MobileMenuToggle is_open={is_menu_open} onClick={onMenuToggleClick} />
                    )}
                    {renderLogo()}
                </FlexBox>

                {!is_mobile_or_tablet && (
                    <DesktopMenu
                        onItemClick={onItemClick}
                        activeTab={activeTab}
                        items={visible_items}
                    />
                )}
                <FlexBox justify="end" align="center" gap={'4x'}>
                    {children}
                </FlexBox>
                {is_mobile_or_tablet && <MobileMenu is_open={is_menu_open} items={visible_items} />}
            </FlexBox>
        </Container.Fixed>
    )
}

export default NavTemplate
