import React, { useEffect, useState } from 'react'
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
    const [items, setItems] = useState(partnersItems)

    useEffect(() => {
        if (is_eu) setItems(partnersEUItems)
    }, [is_eu])

    return (
        <NavigationBlock
            renderButtons={PartnersNavButtons}
            topNavigation={TopNavigation}
            renderLogo={() => (
                <CustomLink href={'/partners'}>
                    <SubBrandDerivPartnersBrandLightIcon width={144} height={24} />
                </CustomLink>
            )}
            items={items}
        />
    )
}

export default PartnersNav
