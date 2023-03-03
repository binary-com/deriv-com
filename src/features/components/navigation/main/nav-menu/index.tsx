import clsx from 'clsx'
import React, { forwardRef, HTMLAttributes } from 'react'
import PlatformSection from '../nav-sections/platform'
import NavMarketSection from '../nav-sections/market'
import AboutUsNavSection from '../nav-sections/about-us'
import ResourcesNavSection from '../nav-sections/resources'
import LegalNavSection from '../nav-sections/legal'
import PartnerNavSection from '../nav-sections/partner'
import * as styles from './nav-menu.module.scss'
import { Localize } from 'components/localization'
import { Accordion, AccordionItem } from 'components/elements'

interface INavMenuProps extends HTMLAttributes<HTMLDivElement> {
    is_open: boolean
}

const NavMenu = forwardRef<HTMLDivElement, INavMenuProps>(({ is_open, className }, ref) => {
    return (
        <div
            ref={ref}
            className={clsx(className, styles.nav_menu, {
                [styles.visible_nav_menu]: is_open,
            })}
        >
            <Accordion>
                <AccordionItem header={<Localize translate_text="Trade" />}>
                    <PlatformSection />
                </AccordionItem>
                <AccordionItem header={<Localize translate_text="Markets" />}>
                    <NavMarketSection />
                </AccordionItem>
                <AccordionItem header={<Localize translate_text="About us" />}>
                    <AboutUsNavSection />
                </AccordionItem>
                <AccordionItem header={<Localize translate_text="Resources" />}>
                    <ResourcesNavSection />
                </AccordionItem>
                <AccordionItem header={<Localize translate_text="Legal" />}>
                    <LegalNavSection />
                </AccordionItem>
                <AccordionItem header={<Localize translate_text="Partner" />}>
                    <PartnerNavSection />
                </AccordionItem>
            </Accordion>
        </div>
    )
})

NavMenu.displayName = 'NavMenu'

export default NavMenu
