import React from 'react'
import { MobileNavToggle, NavigationBlock } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { SubBrandDerivPrimeBrandLightIcon } from '@deriv/quill-icons/Logo'
import { Button } from '@deriv/quill-design'
import { partnersEUItems, partnersItems } from './data'
import useRegion from 'components/hooks/use-region'
import { Localize } from 'components/localization'
import useScrollToElement from 'features/hooks/use-scroll-to-element'

const PrimeNavButtons = () => {
    return (
        <div className="flex items-center gap-gap-md">
            <Button
                className="block lg:hidden"
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
    const { is_eu } = useRegion()
    return (
        <NavigationBlock
            renderButtons={PrimeNavButtons}
            renderLogo={() => <SubBrandDerivPrimeBrandLightIcon width={117} height={24} />}
            items={is_eu ? partnersEUItems : partnersItems}
        />
    )
}

export default PrimeNav
