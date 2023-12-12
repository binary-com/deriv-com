import React from 'react'
import { NavigationBlock } from '@deriv-com/blocks'
// eslint-disable-next-line import/no-unresolved
import { SubBrandDerivPartnersBrandLightIcon } from '@deriv/quill-icons/Logo'
import { partnersItems, partnersEUItems } from './data'
import useRegion from 'components/hooks/use-region'

const PartnersNav = ({ is_prime_page = false }: { is_prime_page?: boolean }) => {
    const { is_eu } = useRegion()

    return (
        <NavigationBlock
            renderLogo={() => <SubBrandDerivPartnersBrandLightIcon width={144} height={24} />}
            items={is_eu ? partnersEUItems : partnersItems}
        />
    )
}

export default PartnersNav
