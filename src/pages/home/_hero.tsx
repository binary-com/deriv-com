import React from 'react'
import RawBannerData from './_row-banner-data'
import EuBannerData from './_eu-banner-data'
import EuMobileBannerData from './_eu-mobile-banner-data'
import RowMobileBannerData from './_row-mobile-banner-data'
import useRegion from 'components/hooks/use-region'
import useBreakpoints from 'components/hooks/use-breakpoints'

type THeroProps = {
    is_ppc?: boolean
}

const Hero = ({ is_ppc }: THeroProps) => {
    const { is_eu, is_row } = useRegion()
    const { is_mobile_or_tablet } = useBreakpoints()

    if (is_eu && is_mobile_or_tablet) return <EuMobileBannerData is_ppc={is_ppc} />
    if (is_eu) return <EuBannerData is_ppc={is_ppc} />
    if (is_row && is_mobile_or_tablet) return <RowMobileBannerData is_ppc={is_ppc} />

    return <RawBannerData is_ppc={is_ppc} />
}

export default Hero
