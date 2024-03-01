import React from 'react'
import { MobileNavToggle, NavigationBlock } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { SubBrandDerivPrimeBrandLightIcon } from '@deriv/quill-icons/Logo'
import { Button } from '@deriv/quill-design'
import { CustomLink } from '@deriv-com/components'
import { partnersEUItems, partnersItems } from './data'
import TopNavigation from './top-navigation'
import { Localize } from 'components/localization'
import useScrollToElement from 'features/hooks/use-scroll-to-element'
import useBuildVariant from 'features/hooks/use-build-variant'

const PrimeNavButtons = () => {
    return (
        <div className="flex items-center gap-gap-md">
            <Button
                className="hidden sm:max-lg:!block"
                variant="secondary"
                colorStyle="black"
                size="lg"
                onClick={useScrollToElement('getintouch')}
            >
                <Localize translate_text="_t_Contact us_t_" />
            </Button>
            <Button
                className="hidden lg:block"
                size="lg"
                id="dm-nav-deriv-prime-contact"
                onClick={useScrollToElement('getintouch')}
            >
                <Localize translate_text="_t_Contact us_t_" />
            </Button>
            <MobileNavToggle />
        </div>
    )
}

const PrimeNav = () => {
    const { region } = useBuildVariant()

    return (
        <NavigationBlock
            topNavigation={TopNavigation}
            renderButtons={PrimeNavButtons}
            renderLogo={() => (
                <CustomLink href={'/partners/deriv-prime/'}>
                    <SubBrandDerivPrimeBrandLightIcon width={118} height={24} />
                </CustomLink>
            )}
            items={region === "row" ? partnersItems : partnersEUItems}
        />
    )
}

export default PrimeNav
