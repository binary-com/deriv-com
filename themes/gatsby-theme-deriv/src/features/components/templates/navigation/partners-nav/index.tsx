import React from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { SubBrandDerivPartnersBrandLightIcon } from '@deriv/quill-icons/Logo'
import { CustomLink } from '@deriv-com/components'
import TopNavigation from './top-navigation'
import { partnersItems, partnersEUItems } from './data'
import PartnersNavButtons from './nav.buttons'
import useBuildVariant from 'features/hooks/use-build-variant'

const PartnersNav = () => {
    const { region } = useBuildVariant()

    return (
        <NavigationBlock
            renderButtons={PartnersNavButtons}
            topNavigation={TopNavigation}
            renderLogo={() => (
                <CustomLink href={'/partners'}>
                    <SubBrandDerivPartnersBrandLightIcon width={144} height={24} />
                </CustomLink>
            )}
            items={region === "row" ? partnersItems : partnersEUItems}
        />
    )
}

export default PartnersNav
