import React from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { SubBrandDerivPartnersBrandLightIcon } from '@deriv/quill-icons/Logo'
import { CustomLink } from '@deriv-com/components'
import TopNavigation from './top-navigation'
import { partnersItems, partnersEUItems } from './data'
import PartnersNavButtons from './nav.buttons'
import useRegion from 'components/hooks/use-region'

const PartnersNav = () => {
    const { is_eu } = useRegion()

    return (
        <NavigationBlock
            renderButtons={PartnersNavButtons}
            topNavigation={TopNavigation}
            renderLogo={() => (
                <CustomLink href={'/partners'}>
                    <SubBrandDerivPartnersBrandLightIcon width={144} height={24} />
                </CustomLink>
            )}
            items={is_eu ? partnersEUItems : partnersItems}
        />
    )
}

export default PartnersNav
